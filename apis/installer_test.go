package apis_test

import (
	"archive/zip"
	"bytes"
	"context"
	"database/sql"
	"encoding/json"
	"errors"
	"io"
	"mime/multipart"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
	"time"

	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/tests"
)

type installerStatusResult struct {
	RequiresSetup bool   `json:"requiresSetup"`
	SetupToken    string `json:"setupToken"`
}

func TestInstallerStatus(t *testing.T) {
	t.Parallel()

	t.Run("requires setup when there are no real superusers", func(t *testing.T) {
		app, err := tests.NewTestApp()
		if err != nil {
			t.Fatal(err)
		}
		defer app.Cleanup()

		deleteRealSuperusers(t, app)

		mux := buildInstallerTestMux(t, app)

		recorder := doInstallerRequest(t, mux, http.MethodGet, "/api/installer/status", nil, nil)
		if recorder.Code != http.StatusOK {
			t.Fatalf("Expected status %d, got %d", http.StatusOK, recorder.Code)
		}

		status := decodeInstallerStatus(t, recorder)
		if !status.RequiresSetup {
			t.Fatalf("Expected setup to be required, got %#v", status)
		}
		if status.SetupToken == "" {
			t.Fatalf("Expected a non-empty setup token")
		}
		if cacheControl := recorder.Header().Get("Cache-Control"); cacheControl != "no-store" {
			t.Fatalf("Expected Cache-Control no-store, got %q", cacheControl)
		}

		installerRecord, err := app.FindAuthRecordByEmail(core.CollectionNameSuperusers, core.DefaultInstallerEmail)
		if err != nil {
			t.Fatalf("Expected installer superuser record to exist: %v", err)
		}
		if installerRecord == nil {
			t.Fatal("Expected installer superuser record to be initialized")
		}
	})

	t.Run("does not require setup when a real superuser already exists", func(t *testing.T) {
		app, err := tests.NewTestApp()
		if err != nil {
			t.Fatal(err)
		}
		defer app.Cleanup()

		mux := buildInstallerTestMux(t, app)

		recorder := doInstallerRequest(t, mux, http.MethodGet, "/api/installer/status", nil, nil)
		if recorder.Code != http.StatusOK {
			t.Fatalf("Expected status %d, got %d", http.StatusOK, recorder.Code)
		}

		status := decodeInstallerStatus(t, recorder)
		if status.RequiresSetup {
			t.Fatalf("Expected setup to be disabled, got %#v", status)
		}
		if status.SetupToken != "" {
			t.Fatalf("Expected no setup token when setup is not required, got %q", status.SetupToken)
		}
		if cacheControl := recorder.Header().Get("Cache-Control"); cacheControl != "no-store" {
			t.Fatalf("Expected Cache-Control no-store, got %q", cacheControl)
		}
	})
}

func TestInstallerSetupTokenCanCreateFirstSuperuser(t *testing.T) {
	t.Parallel()

	app, err := tests.NewTestApp()
	if err != nil {
		t.Fatal(err)
	}
	defer app.Cleanup()

	deleteRealSuperusers(t, app)

	mux := buildInstallerTestMux(t, app)

	status := decodeInstallerStatus(t, doInstallerRequest(t, mux, http.MethodGet, "/api/installer/status", nil, nil))
	if !status.RequiresSetup || status.SetupToken == "" {
		t.Fatalf("Expected installer setup token, got %#v", status)
	}

	createBody := strings.NewReader(`{
		"email": "bootstrap@example.com",
		"password": "1234567890",
		"passwordConfirm": "1234567890"
	}`)
	createRecorder := doInstallerRequest(t, mux, http.MethodPost, "/api/collections/_superusers/records", createBody, map[string]string{
		"Authorization": status.SetupToken,
	})
	if createRecorder.Code != http.StatusOK {
		t.Fatalf("Expected status %d, got %d with body %s", http.StatusOK, createRecorder.Code, createRecorder.Body.String())
	}
	if !strings.Contains(createRecorder.Body.String(), `"email":"bootstrap@example.com"`) {
		t.Fatalf("Expected created superuser response, got %s", createRecorder.Body.String())
	}

	record, err := app.FindAuthRecordByEmail(core.CollectionNameSuperusers, "bootstrap@example.com")
	if err != nil {
		t.Fatalf("Expected newly created superuser to exist: %v", err)
	}
	if record == nil {
		t.Fatal("Expected newly created superuser record")
	}

	_, err = app.FindAuthRecordByEmail(core.CollectionNameSuperusers, core.DefaultInstallerEmail)
	if !errors.Is(err, sql.ErrNoRows) {
		t.Fatalf("Expected installer superuser to be deleted, got %v", err)
	}

	finalStatus := decodeInstallerStatus(t, doInstallerRequest(t, mux, http.MethodGet, "/api/installer/status", nil, nil))
	if finalStatus.RequiresSetup {
		t.Fatalf("Expected setup to be completed, got %#v", finalStatus)
	}
	if finalStatus.SetupToken != "" {
		t.Fatalf("Expected setup token to be cleared, got %q", finalStatus.SetupToken)
	}
}

func TestInstallerSetupTokenCanAccessBackups(t *testing.T) {
	t.Parallel()

	app, err := tests.NewTestApp()
	if err != nil {
		t.Fatal(err)
	}
	defer app.Cleanup()

	deleteRealSuperusers(t, app)

	mux := buildInstallerTestMux(t, app)

	status := decodeInstallerStatus(t, doInstallerRequest(t, mux, http.MethodGet, "/api/installer/status", nil, nil))
	if !status.RequiresSetup || status.SetupToken == "" {
		t.Fatalf("Expected installer setup token, got %#v", status)
	}

	uploadBody, uploadContentType := newBackupUploadBody(t, "bootstrap.zip")
	uploadRecorder := doInstallerRequest(t, mux, http.MethodPost, "/api/backups/upload", uploadBody, map[string]string{
		"Authorization": status.SetupToken,
		"Content-Type":  uploadContentType,
	})
	if uploadRecorder.Code != http.StatusNoContent {
		t.Fatalf("Expected status %d, got %d with body %s", http.StatusNoContent, uploadRecorder.Code, uploadRecorder.Body.String())
	}

	files, err := getBackupFiles(app)
	if err != nil {
		t.Fatal(err)
	}
	if len(files) != 1 || files[0].Key != "bootstrap.zip" {
		t.Fatalf("Expected uploaded bootstrap backup, got %#v", files)
	}

	if err := app.CreateBackup(context.Background(), "restore.zip"); err != nil {
		t.Fatal(err)
	}

	restoreRecorder := doInstallerRequest(t, mux, http.MethodPost, "/api/backups/restore.zip/restore", nil, map[string]string{
		"Authorization": status.SetupToken,
	})
	if restoreRecorder.Code != http.StatusNoContent {
		t.Fatalf("Expected status %d, got %d with body %s", http.StatusNoContent, restoreRecorder.Code, restoreRecorder.Body.String())
	}

	time.Sleep(2500 * time.Millisecond)
}

func buildInstallerTestMux(t testing.TB, app *tests.TestApp) http.Handler {
	t.Helper()

	baseRouter, err := apis.NewRouter(app)
	if err != nil {
		t.Fatal(err)
	}

	serveEvent := new(core.ServeEvent)
	serveEvent.App = app
	serveEvent.Router = baseRouter

	if err := app.OnServe().Trigger(serveEvent, func(e *core.ServeEvent) error {
		return nil
	}); err != nil {
		t.Fatal(err)
	}

	mux, err := serveEvent.Router.BuildMux()
	if err != nil {
		t.Fatal(err)
	}

	return mux
}

func doInstallerRequest(t testing.TB, mux http.Handler, method string, path string, body io.Reader, headers map[string]string) *httptest.ResponseRecorder {
	t.Helper()

	recorder := httptest.NewRecorder()
	req := httptest.NewRequest(method, path, body)

	if body != nil && (headers == nil || headers["Content-Type"] == "") {
		req.Header.Set("Content-Type", "application/json")
	}

	for key, value := range headers {
		req.Header.Set(key, value)
	}

	mux.ServeHTTP(recorder, req)

	return recorder
}

func decodeInstallerStatus(t testing.TB, recorder *httptest.ResponseRecorder) installerStatusResult {
	t.Helper()

	var result installerStatusResult
	if err := json.Unmarshal(recorder.Body.Bytes(), &result); err != nil {
		t.Fatalf("Failed to decode installer status response: %v\nbody: %s", err, recorder.Body.String())
	}

	return result
}

func deleteRealSuperusers(t testing.TB, app *tests.TestApp) {
	t.Helper()

	col, err := app.FindCachedCollectionByNameOrId(core.CollectionNameSuperusers)
	if err != nil {
		t.Fatal(err)
	}

	_, err = app.DB().Delete(col.Name, dbx.Not(dbx.HashExp{
		"email": core.DefaultInstallerEmail,
	})).Execute()
	if err != nil {
		t.Fatal(err)
	}
}

func newBackupUploadBody(t testing.TB, filename string) (*bytes.Buffer, string) {
	t.Helper()

	zipBuffer := new(bytes.Buffer)
	zipWriter := zip.NewWriter(zipBuffer)
	if err := zipWriter.Close(); err != nil {
		t.Fatal(err)
	}

	body := new(bytes.Buffer)
	writer := multipart.NewWriter(body)

	fileWriter, err := writer.CreateFormFile("file", filename)
	if err != nil {
		t.Fatal(err)
	}

	if _, err := io.Copy(fileWriter, zipBuffer); err != nil {
		t.Fatal(err)
	}

	if err := writer.Close(); err != nil {
		t.Fatal(err)
	}

	return body, writer.FormDataContentType()
}
