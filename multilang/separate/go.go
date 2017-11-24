package main

import (
	"fmt"
	"strings"
)

func main() {
	arr := []string{"1", "2", "3"}
	str := strings.Join(arr, ",")
	fmt.Println(str)

	str2 := "1,2,3"
	arr2 := strings.Split(str2, ",")
	fmt.Println(arr2)
}
