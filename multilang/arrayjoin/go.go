package main

import (
	"fmt"
)

func main() {
	a := []string{"a", "aa", "aaa"}
	b := []string{"b", "bb", "bbb"}
	c := append(a, b...)
	fmt.Println(c)
}
