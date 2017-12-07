package main

import (
	"fmt"
	"sort"
)

type Data struct {
	Name  string
	Score int
}

type Arr []Data

func (a Arr) Len() int {
	return len(a)
}

func (a Arr) Swap(i, j int) {
	a[i], a[j] = a[j], a[i]
}

func (a Arr) Less(i, j int) bool {
	return a[i].Score < a[j].Score
}

func main() {
	var arr Arr = []Data{
		{"Tanaka", 80},
		{"Sasaki", 85},
		{"Sato", 72},
	}

	sort.Sort(arr)
	fmt.Println(arr)
}
