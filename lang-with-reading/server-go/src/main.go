package main

import (
	"fmt"
	"net/http"
	"server/dialogue"

	"github.com/rs/cors"
)

func main() {
	route := dialogue.DialogueRouter()

	fmt.Println("Server is starting")
	// handler := cors.New(cors.Options{
	// 	AllowedOrigins: []string{"http://localhost:8080", "http://172.30.1.39:8080/"},
	// 	AllowedHeaders: []string{"*"},
	// 	AllowedMethods: []string{http.MethodGet, http.MethodPost, http.MethodDelete},
	// 	// AllowCredentials: true,
	// 	// Enable Debugging for testing, consider disabling in production
	// 	// Debug: true,
	// }).Handler(route)

	handler := cors.Default().Handler(route)
	http.ListenAndServe(":8020", handler)
	// http.ListenAndServe(":8020", route)
}
