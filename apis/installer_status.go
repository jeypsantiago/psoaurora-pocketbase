package apis

import (
	"net/http"
	"time"

	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/tools/hook"
	"github.com/pocketbase/pocketbase/tools/router"
)

const installerSetupTokenDuration = 15 * time.Minute

func bindInstallerApi(app core.App, rg *router.RouterGroup[*core.RequestEvent]) {
	rg.GET("/installer/status", installerStatus).Bind(
		installerStatusRateLimit(),
		SkipSuccessActivityLog(),
	)
}

type installerStatusResponse struct {
	RequiresSetup bool   `json:"requiresSetup"`
	SetupToken    string `json:"setupToken,omitempty"`
}

func installerStatus(e *core.RequestEvent) error {
	e.Response.Header().Set("Cache-Control", "no-store")

	result := installerStatusResponse{}

	if needInstallerSuperuser(e.App) {
		record, err := findOrCreateInstallerSuperuser(e.App)
		if err != nil {
			return e.InternalServerError("Failed to initialize the installer status.", err)
		}

		token, err := record.NewStaticAuthToken(installerSetupTokenDuration)
		if err != nil {
			return e.InternalServerError("Failed to generate installer setup token.", err)
		}

		result.RequiresSetup = true
		result.SetupToken = token
	}

	return e.JSON(http.StatusOK, result)
}

func installerStatusRateLimit() *hook.Handler[*core.RequestEvent] {
	return &hook.Handler[*core.RequestEvent]{
		Id:       DefaultRateLimitMiddlewareId,
		Priority: DefaultRateLimitMiddlewarePriority,
		Func: func(e *core.RequestEvent) error {
			if skipRateLimit(e) {
				return e.Next()
			}

			labels := append([]string{"installer:status", "*:status"}, defaultRateLimitLabels(e)...)

			rule, ok := e.App.Settings().RateLimits.FindRateLimitRule(labels, defaultRateLimitAudience(e)...)
			if ok {
				if err := checkRateLimit(e, "__pb_installer_status__"+e.Request.Pattern+rule.Audience, rule); err != nil {
					return err
				}
			}

			return e.Next()
		},
	}
}
