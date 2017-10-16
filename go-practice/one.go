package main

import "fmt"

type Person struct {
	FirstName string
	LastName  string
}

func (p *Person) Name() string {
	return p.FirstName + " " + p.LastName
}

type Named interface {
	Name() string
}

func printName(named Named) {
	fmt.Println(named.Name())
}

func main() {
	p1 := &Person{"Taro", "Tanaka"}
	fmt.Println(p1.FirstName)
	fmt.Println(p1.Name())

	printName(p1)
}
