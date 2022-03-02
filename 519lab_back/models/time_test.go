package models

import (
	"fmt"
	"testing"
)



func TestUserGetContent(t *testing.T) {
	a := UserGetContent("20062112", 1)
	fmt.Println(a)
	//t.Logf("addupper 执行正确")
}