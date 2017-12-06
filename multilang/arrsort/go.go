package main

import (
	"fmt"
	"sort"
)

func main() {
	arr1 := []int{4, 2, 9, 0, 5, 1, 7, 5}
	fmt.Println(arr1)

	arr1If := sort.IntSlice(arr1)
	sort.Sort(arr1If)
	fmt.Println(arr1) // [0, 1, 2, 4, 5, 5, 7, 9]

	arr2 := []int{4, 2, 9, 0, 5, 1, 7, 5}
	fmt.Println(arr2)

	arr2If := sort.IntSlice(arr2)
	sort.Sort(sort.Reverse(arr2If))
	fmt.Println(arr2) // [9, 7, 5, 5, 4, 2, 1, 0]
}
