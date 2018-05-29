package main

import (
	"fmt"
	"math/rand"
	"time"
)

func shuffle(arr []string) {
	rand.Seed(time.Now().UnixNano())
	for i := range arr {
		j := rand.Intn(i + 1)
		arr[i], arr[j] = arr[j], arr[i]
	}
}

func main() {
	list := []string{"a", "b", "c", "d", "e", "f", "g", "h"}
	shuffle(list)
	fmt.Println(list)
}
