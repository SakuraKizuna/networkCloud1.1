package middleware

import (
	"519lab_back/dao"
	"519lab_back/module"
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
)

func CheckToken(c *gin.Context){
	token := module.GetTokenFromHeader(c.Request.Header)
	fmt.Println(token)
	if token == "none" || token == "null" {
		c.JSON(http.StatusOK, gin.H{
			"status": 205,
			"msg":    "未登录",
		})
		c.Abort()
		return
	}
	stuNum := dao.Redis.Get(token).Val()
	fmt.Println(stuNum)
	if stuNum == "" {
		c.JSON(http.StatusOK, gin.H{
			"status": 205,
			"msg":    "登录信息过期，请重新登录",
		})
		c.Abort()
		return
	}
	module.ResetTokenTime(token, stuNum)
}
