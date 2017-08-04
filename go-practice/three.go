package main

import (
	"fmt"
	"net/url"
	"path/filepath"
	"strings"
)

func main() {
	a := "http://testtest.co.jp/media/748913290803032.jpg?aaaa"

	u, _ := url.Parse(a)

	s := strings.Split(u.Path, "/")
	img := s[len(s)-1]

	ext := filepath.Ext(img)
	thumb := img[:len(img)-len(ext)] + "_thumb" + ext

	res := strings.Replace(a, img, thumb, 1)

	fmt.Printf(res)
}
