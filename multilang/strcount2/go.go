package main

import (
	"fmt"
	"strings"
)

func main() {
	var arr []string
	text := "数を調査、文字数をカウントする"
	arr = strings.Split(text, "数")
	fmt.Println(len(arr) - 1)

	var arr2 []string
	arr2 = strings.Split(text, "か")
	fmt.Println(len(arr2) - 1)
}
