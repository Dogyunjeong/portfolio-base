package dialogue

import "time"

type Paragraph struct {
}

type RawSpeakesr struct {
	Uuid       string `json:"uuid"`
	Paragraphs []int  `json:"paragraphs"`
}

type RawDialogue struct {
	Name       string        `json:"name"`
	Title      string        `json:"title"`
	Lang       string        `json:"lang"`
	Speakers   []RawSpeakesr `json:"speakers"`
	Paragraphs []string      `json:"paragraphs"`
	CreatedAt  time.Time     `json:"createdAt`
}

type Todo struct {
	Id        int       `json:"id"`
	Name      string    `json:"name"`
	Completed bool      `json:"completed"`
	Due       time.Time `json:"due"`
}

type Todos []Todo
