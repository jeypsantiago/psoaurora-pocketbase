package apis

import (
	"database/sql"
	"errors"
	"fmt"
	"strings"

	"github.com/fatih/color"
	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/tools/osutils"
)

// DefaultInstallerFunc is the default PocketBase installer function.
//
// It will attempt to open a link in the browser to the dashboard login page
// where users can complete the first superuser setup flow.
//
// See https://github.com/pocketbase/pocketbase/discussions/5814.
func DefaultInstallerFunc(_ core.App, _ *core.Record, baseURL string) error {
	// launch url (ignore errors and always print a help text as fallback)
	url := fmt.Sprintf("%s/_/#/login", strings.TrimRight(baseURL, "/"))
	_ = osutils.LaunchURL(url)
	color.Magenta("\n(!) Launch the URL below in the browser if it hasn't been open already to create your first superuser account:")
	color.New(color.Bold).Add(color.FgCyan).Println(url)
	color.New(color.FgHiBlack, color.Italic).Printf("(complete the setup from the dashboard login page)\n\n")

	return nil
}

func loadInstaller(
	app core.App,
	baseURL string,
	installerFunc func(app core.App, systemSuperuser *core.Record, baseURL string) error,
) error {
	if installerFunc == nil || !needInstallerSuperuser(app) {
		return nil
	}

	superuser, err := findOrCreateInstallerSuperuser(app)
	if err != nil {
		return err
	}

	return installerFunc(app, superuser, baseURL)
}

func needInstallerSuperuser(app core.App) bool {
	total, err := app.CountRecords(core.CollectionNameSuperusers, dbx.Not(dbx.HashExp{
		"email": core.DefaultInstallerEmail,
	}))

	return err == nil && total == 0
}

func findOrCreateInstallerSuperuser(app core.App) (*core.Record, error) {
	col, err := app.FindCachedCollectionByNameOrId(core.CollectionNameSuperusers)
	if err != nil {
		return nil, err
	}

	record, err := app.FindAuthRecordByEmail(col, core.DefaultInstallerEmail)
	if err != nil {
		if !errors.Is(err, sql.ErrNoRows) {
			return nil, err
		}

		record = core.NewRecord(col)
		record.SetEmail(core.DefaultInstallerEmail)
		record.SetRandomPassword()

		err = app.Save(record)
		if err != nil {
			return nil, err
		}
	}

	return record, nil
}
