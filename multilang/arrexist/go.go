package main

import (
    "fmt"
)

func main() {
    arr := []int{1, 2, 3, 2, 5, 2, 3, 4}
    check := false
    for _, v := range arr {
        if 2 == v {
            check = true
        }
    }
    fmt.Println(check)
}
