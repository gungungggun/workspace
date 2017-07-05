package main

import (
	"fmt"
)

func fn(arr [3]string) {
	arr[0] = "x"
	fmt.Println(arr)
}

func sum(nums ...int) (res int) {
	for _, n := range nums {
		res += n
	}
	return
}

func main() {
	arr := [3]string{"a", "b", "c"}
	fmt.Println(arr)
	fn(arr)
	fmt.Println(arr)

	fmt.Println(sum(1, 2, 4))
}
