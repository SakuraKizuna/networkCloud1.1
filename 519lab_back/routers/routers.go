package routers

import (
	"519lab_back/controller"
	"519lab_back/middleware"
	"github.com/gin-gonic/gin"
	"net/http"
)

////解决ajax跨域问题
//func Cors() gin.HandlerFunc {
//	return func(context *gin.Context) {
//		method := context.Request.Method
//		context.Header("Access-Control-Allow-Origin", "*")
//		context.Header("Access-Control-Allow-Headers", "Content-Type,AccessToken,X-CSRF-Token, Authorization, Token")
//		context.Header("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
//		context.Header("Access-Control-Expose-Headers", "Content-Length, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Content-Type")
//		context.Header("Access-Control-Allow-Credentials", "true")
//		if method == "OPTIONS" {
//			context.AbortWithStatus(http.StatusNoContent)
//		}
//		context.Next()
//	}
//}

//routers
func SetupRouter() *gin.Engine {
	r := gin.Default()
	r.StaticFS("/uploadPic", http.Dir("./uploadPic"))
	r.Use(middleware.Cors(), middleware.LogerMiddleware())
	//告诉gin框架模板引用的静态文件去哪里找
	r.Static("/static", "static")
	//告诉gin框架去哪里找模板文件
	r.LoadHTMLGlob("templates/*")
	r.GET("/", controller.IndexHandler)

	// --------------后台--------------------
	r.POST("/dev/admin_login", controller.AdminLogin)
	r.POST("/dev/logout", controller.AdminLogout)
	r.POST("/dev/query_student_time", controller.QueryStudentTime)
	r.POST("/dev/query_student", controller.QueryStudent)
	r.POST("/dev/query_unusual", controller.QueryUnusual)
	r.POST("/dev/query_euser")
	r.POST("/dev/query_student_time_single", controller.QueryStuTimeSingle)
	r.POST("/dev/query_all_time", controller.QueryAllTime)
	r.POST("/dev/end_sign", controller.EndSign)
	r.POST("/dev/sign_supply", controller.SignSupply)
	r.POST("/dev/sent_unusual_email", controller.SendUnusualEmail)
	r.POST("/dev/reply_lab", controller.ReplyLab)
	r.POST("/dev/apply_ok", controller.ApplyOK)
	r.POST("/dev/show_administrators", controller.ShowAdministrators)
	r.POST("/dev/add_administrator", controller.AddAdministrator)
	r.POST("/dev/query_student_date_time", controller.QueryStuDateTime)
	r.POST("/dev/remake_pass_delete", controller.RemakeORDelete)
	r.POST("/dev/delete_sign_data", controller.DeleteSignData)

	// --------------前台--------------------
	r.POST("/login", controller.UserLogin)
	r.POST("/sendEmail", controller.SendEmail)
	r.POST("/register", controller.UserRegister)
	r.POST("/endSign", controller.UserEndSign)
	r.POST("/startSign", controller.UserStartSign)
	r.POST("/resetPassword", controller.ResetPassword) //
	r.POST("/commentPublishArticle", middleware.CheckToken, controller.UserPublishCommentArt)
	r.POST("/comment", middleware.CheckToken, controller.UserDiscuss)
	r.GET("/getUnreadNumber", controller.GetUnreadMessage)
	r.GET("/notifications", controller.GetNotificationInfo)
	r.GET("/timeInfo", controller.UserGetTimeInfo)
	r.GET("/getDiscussionArea/:id/:pageNum", controller.GetDiscussionArea)
	r.GET("/getAllArticles/:classification/:pageNum", controller.GetAllArticles)
	r.GET("/getOneArticle/:articleId", controller.GetArticle)
	r.GET("/getStatus", controller.GetStatus)
	r.POST("/GetStudyRec", middleware.CheckToken, controller.UserGetStudyRec)
	r.GET("/getUserInfo", controller.UserGetPersonalInfo)
	r.POST("/modifyPersonalInfo", middleware.CheckToken, controller.ModifyPersonalInfo)
	r.POST("/uploadHeadPic", middleware.CheckToken, controller.UserUploadHeadPic)
	r.GET("/getTodoList", controller.UserGetTodo)
	r.POST("/UserAdminDeleteTodo", middleware.CheckToken, controller.UserAdminDeleteTodo)
	r.POST("/UserAdminAddTodo", middleware.CheckToken, controller.UserAdminAddTodo)
	r.GET("/GetUserHeadPic/:username", controller.GetUserHeadPic)
	r.POST("/UserLikeCon", middleware.CheckToken, controller.UserLikeCon)
	r.GET("/GetLikeStatus/:id", middleware.CheckToken, controller.UserGetThumbsUp)
	r.GET("/GetMoreDis/:artId/:parentId/:pageNum", controller.GetMoreDis)
	r.GET("/GetHeadPicBT", controller.GetHeadPicBT)

	// --------------测试--------------------
	r.POST("/test", controller.TestAPI)
	r.POST("/test2", controller.TestReceiveFile)
	r.POST("/test3", controller.TestHeaders)

	return r

}
