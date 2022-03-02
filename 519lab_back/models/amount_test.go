package models

import (
	"testing"
)

func TestGetTotalNum(t *testing.T) {
	b := GetTotalNum("20062111")
	if b != "ok"{
		t.Fatalf("addupper 执行错误 期望值%v 实际值%v",55,b)

	}

	t.Logf("addupper 执行正确")
}
