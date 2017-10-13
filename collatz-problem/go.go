package main

import (
    "fmt"
    "time"
    "strconv"
)

func main() {
    start := time.Now();
    count := 0
    for i:= 1; i <= 10000; i++ {
        x := i
        for x != 1 {
          if x % 2 == 0 {
            x = a(x)
          } else {
            x = b(x)
          }
          count++
        }
    }

    end := time.Now();
    fmt.Printf("%f秒\n",(end.Sub(start)).Seconds())
	fmt.Println("count:" + strconv.Itoa(count))
}

func a(n int) int {
  return n / 2
}

func b(n int) int {
  return n * 3 + 1
}
