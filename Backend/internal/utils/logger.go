package utils

import (
	"log"
	"os"
)

// Logger is a global logger instance.
var Logger *log.Logger

// Function to initialize the logger
func InitializeLogger(logPath string) {
	file, err := os.OpenFile(logPath, os.O_WRONLY|os.O_CREATE|os.O_APPEND, 0644)
	if err != nil {
		log.Fatalf("Failed to open log file: %v", err)
	}

	Logger = log.New(file, "", log.LstdFlags)
	Logger.Println("Logger initialized")
}
