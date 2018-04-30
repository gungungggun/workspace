package main

import (
	"fmt"
	"unicode/utf8"
)

func main() {
	text := "文字数をカウントする"
	fmt.Println(len(text))
	fmt.Println(utf8.RuneCountInString(text))
	fmt.Println(len([]rune(text)))
}
