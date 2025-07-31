package main

import (
	"github.com/Vinesh0299/Pi-Home-Sentry/Backend/internal/utils"

)

func main() {
	logger := utils.GetLogger()

	logger.Debug("Used Debug logger in main function")
	logger.Info("Used the logger in main function")
	logger.Warn("Used the warn logger in main function")
	logger.Error("Used the error logger in main function")
}
