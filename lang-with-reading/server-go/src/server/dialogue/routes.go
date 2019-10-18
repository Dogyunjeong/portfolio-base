package dialogue

import (
	"net/http"

	"github.com/gorilla/mux"
)

type Route struct {
	Name        string
	Method      string
	Pattern     string
	HandlerFunc http.HandlerFunc
}

type Routes []Route

func DialogueRouter() *mux.Router {

	router := mux.NewRouter().StrictSlash(true)
	for _, route := range routes {
		router.
			Methods(route.Method).
			Path(route.Pattern).
			Name(route.Name).
			Handler(route.HandlerFunc)
	}

	return router
}

var routes = Routes{
	Route{
		"HealthCheck",
		"GET",
		"/health",
		HealthCheck,
	},
	Route{
		"GetDialogue",
		"GET",
		"/dialogue/{dialogueId}/lang/{lang}",
		GetDialogue,
	},
	Route{
		"CreateDialogue",
		"POST",
		"/dialogue",
		CreateDialogue,
	},
	Route{
		"GetCategory",
		"GET",
		"/dialogue/category",
		GetCategory,
	},
	Route{
		"TodoShow",
		"GET",
		"/todos/{todoId}",
		TodoShow,
	},
}
