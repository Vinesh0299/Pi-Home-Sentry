package server

import (
	"net/http"
	"github.com/go-chi/chi/v5"
)

func SetupRouter() *chi.Mux {
	router := chi.NewRouter()

	// TODO: Leading "/" should be ignored
	router.Get("/ping", ping)

	return router
}

// TODO: Convert to proper json return using types
func ping(res http.ResponseWriter, req *http.Request) {
	res.WriteHeader(http.StatusOK)
	res.Write([]byte("pong"))
}