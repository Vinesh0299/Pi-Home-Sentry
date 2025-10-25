package utils

import (
	"path/filepath"
	"log/slog"
	"os"
	"io"
)

// Logger is a global logger instance.
var Logger *slog.Logger

// Function to initialize the logger
func initLogger(logPath string) {
	// Ensure the parent directory exists
	dir := filepath.Dir(logPath)
	if err := os.MkdirAll(dir, 0755); err != nil {
		slog.Error("Failed to create log directory", "Path", dir, "Error", err)
		os.Exit(1)
	}

	// Create the log file if it does not exits
	file, err := os.OpenFile(logPath, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0666)
	if err != nil {
		slog.Error("Failed to create log file", "Path:", logPath, "Error:", err)
		os.Exit(1)
	}

	// Create a mew writer for logs
	writer := io.MultiWriter(file, os.Stdout)

	// Create the new logger
	Logger = slog.New(slog.NewJSONHandler(writer, &slog.HandlerOptions{
		Level: slog.LevelDebug,
	}))

	Logger.Info("Logger initialized successfully")
}

// Function that will return the logger object
func GetLogger() *slog.Logger {
	// Create the logger if it does not exists
	if Logger == nil {
		logLocation := os.Getenv("LOG_LOCATION")

		if logLocation == "" {
			logLocation = "./log.logs"
		}

		initLogger(logLocation)
	}

	// Return the logger
	return Logger
}