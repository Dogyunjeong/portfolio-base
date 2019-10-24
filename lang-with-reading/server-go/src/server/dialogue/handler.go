package dialogue

import (
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"os"
	"time"

	"github.com/gorilla/mux"
)

// HealthCheck will return dummy response if server is running
func HealthCheck(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Health checking")
	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(struct {
		Status string
		Data   string
	}{
		Status: "OK",
		Data:   "It is healthy",
	})

}

// CreateDialogue will Receive Raw Json Dialogue and save it into dialogue and if needed, author and etc
func CreateDialogue(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Comming")
	var path string
	var dialogue *RawDialogue
	var payload *RawDialogue

	body, err := ioutil.ReadAll(io.LimitReader(r.Body, 1048576))
	if err != nil {
		panic(err)
	}
	if err := r.Body.Close(); err != nil {
		panic(err)
	}
	if err := json.Unmarshal(body, &payload); err != nil {
		w.Header().Set("Content-Type", "application/json; charset=UTF-8")
		w.WriteHeader(422) // unprocessable entity
		if err := json.NewEncoder(w).Encode(err); err != nil {
			panic(err)
		}
	}
	dialogue = payload
	dialogue.CreatedAt = time.Now()
	path = "s3/" + payload.Lang + "/" + payload.Name
	fmt.Printf("Incomming path: %+v \n", path)
	fmt.Printf("Incomming payload.Lang: %+v \n", payload.Lang)
	file, _ := json.MarshalIndent(dialogue, "", "\t")

	if err = os.MkdirAll(path, os.ModePerm); err != nil {
		w.Header().Set("Content-Type", "application/json; charset=UTF-8")
		w.WriteHeader(http.StatusCreated)
		result := struct {
			Success bool
		}{
			Success: true,
		}
		if err := json.NewEncoder(w).Encode(result); err != nil {
			panic(err)
		}
	}
	if err = ioutil.WriteFile(path+"/dialogue.json", file, 0644); err != nil {
		w.Header().Set("Content-Type", "application/json; charset=UTF-8")
		w.WriteHeader(http.StatusCreated)
		result := struct {
			Success bool
		}{
			Success: true,
		}
		if err := json.NewEncoder(w).Encode(result); err != nil {
			panic(err)
		}
	}

}

// This handler is pretend to be like s3 file serving
func GetDialogue(w http.ResponseWriter, r *http.Request) {
	var path string

	vars := mux.Vars(r)

	path = "s3/" + vars["lang"] + "/" + vars["dialogueId"] + "/dialogue.json"

	// Open our jsonFile
	file, err := os.Open(path)
	if err != nil {
		http.Error(w, "file not found", 404)
		return
	}
	defer file.Close()
	fi, err := file.Stat()
	if err != nil {
		http.Error(w, "file not found", 404)
		return
	}

	http.ServeContent(w, r, file.Name(), fi.ModTime(), file)
	return
}

// This handler is pretend to be like s3 file serving
func GetCategory(w http.ResponseWriter, r *http.Request) {
	var path string

	path = "s3/category/index.json"

	// Open our jsonFile
	file, err := os.Open(path)
	if err != nil {
		http.Error(w, "file not found", 404)
		return
	}
	defer file.Close()
	fi, err := file.Stat()
	if err != nil {
		http.Error(w, "file not found", 404)
		return
	}

	http.ServeContent(w, r, file.Name(), fi.ModTime(), file)
	return
}

func TodoIndex(w http.ResponseWriter, r *http.Request) {
	todos := Todos{
		Todo{Name: "Write presentation"},
		Todo{Name: "Host meetup"},
	}

	if err := json.NewEncoder(w).Encode(todos); err != nil {
		panic(err)
	}
}

func TodoShow(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	todoId := vars["todoId"]
	fmt.Fprintln(w, "Todo show:", todoId)
}
