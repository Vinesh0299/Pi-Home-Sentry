package main

import (
	"net/http"
	"github.com/Vinesh0299/Pi-Home-Sentry/Backend/internal/utils"
	"github.com/Vinesh0299/Pi-Home-Sentry/Backend/internal/server"
)

func main() {
	// Get the logger
	logger := utils.GetLogger()

	// Setup the router
	r := server.SetupRouter()

	logger.Info("Starting the server on 8080")

	if err := http.ListenAndServe(":8080", r); err != nil {
		logger.Error("Server Crashed!!!", "Error:", err)
	}
}
