package main

import (
	"fmt"
	"image"
	_ "image/png"
	"os"
)

func dec2hex(n, beam int) string {
	hex := ""
	str := "0123456789abcdef"
	for i := 0; i < beam; i++ {
		m := n & 0xf
		hex = string(str[m]) + hex
		n -= m
		n >>= 4
	}
	return hex
}

func main() {
	file, _ := os.Open("./sample.png")
	defer file.Close()

	srcImg, _, err := image.Decode(file)
	if err != nil {
		panic(err)
	}
	r, g, b, _ := srcImg.At(0, 0).RGBA()
	fmt.Println(dec2hex(int(r), 2))
	fmt.Println(dec2hex(int(g), 2))
	fmt.Println(dec2hex(int(b), 2))

	//srcBounds := srcImg.Bounds()
	/*for v := srcBounds.Min.Y; v < srcBounds.Max.Y; v++ {
		for h := srcBounds.Min.X; h < srcBounds.Max.X; h++ {
			color := srcImg.At(h, v)
			r, _, _, _ := color.RGBA()
			fmt.Println(dec2hex(int(r), 2))
		}
	}*/
}
