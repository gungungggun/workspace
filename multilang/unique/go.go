package main

import (
    "fmt"
)

func main() {
    arr := []int{1, 2, 3, 2, 5, 2, 3, 4}
    m := make(map[int]bool)
    uniq := [] int{}

    for _, ele := range arr {
        if !m[ele] {
            m[ele] = true
            uniq = append(uniq, ele)
        }
    }

    fmt.Println(uniq) // [1, 2, 3, 5, 4]
}
