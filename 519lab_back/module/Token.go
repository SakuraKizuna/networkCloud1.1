package module

import (
	"519lab_back/dao"
	"519lab_back/models"
	"net/http"
	"time"
)

func TokenToLevelAndBelong(token interface{}) (level int, belong string) {
	adminnameStruct := dao.Redis.Get(token.(string))
	adminname := adminnameStruct.Val()
	dao.Redis.Del(token.(string))
	dao.Redis.Set(token.(string), adminname, 1200*time.Second)
	admin, err := models.GetAdminInfo(adminname)
	if err != nil {
		return -1, "error"
	}
	return admin.Level, admin.Belong
}

func GetTokenFromHeader(header http.Header) (token string) {
	token = "none"
	for k, v := range header {
		if k == "Token" {
			token = v[0]
		}
	}
	return token
}

//重置token时间
func ResetTokenTime(token, username string) {
	dao.Redis.Expire(token,1200*time.Second)
	//dao.Redis.Del(token)
	//dao.Redis.Set(token, username, 1200*time.Second)
}
