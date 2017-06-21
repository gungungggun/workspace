package main

import (
	"errors"
	"fmt"
)

func test(i int) (a int, err error) {
	if i == 0 {
		a = 2
		err = errors.New("bad")
	}
	return
}

func main() {
	a, err := test(0)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(a)
}
