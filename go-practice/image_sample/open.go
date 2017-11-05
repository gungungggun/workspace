package main

import (
	"fmt"
	"image"
	_ "image/png"
	"os"
)

func main() {
	file, _ := os.Open("./sample.png")
	defer file.Close()

	config, formatName, err := image.DecodeConfig(file)
	if err != nil {
		panic(err)
	}
	fmt.Println(formatName)
	fmt.Println(config.Width)
	fmt.Println(config.Height)
}
