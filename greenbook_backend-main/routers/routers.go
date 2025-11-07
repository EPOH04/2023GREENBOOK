package routers

import (
	_ "bluebell_backend/docs" // 千万不要忘了导入把你上一步生成的docs
	"bluebell_backend/logic"
	"bluebell_backend/models"
	"github.com/gin-gonic/gin"
	"github.com/swaggo/gin-swagger"
	"github.com/swaggo/gin-swagger/swaggerFiles"
)

// SetupRouter 设置路由
func SetupRouter(mode string) *gin.Engine {
	if mode == gin.ReleaseMode {
		gin.SetMode(gin.ReleaseMode) // 设置成发布模式
	}
	//初始化 gin Engine  新建一个没有任何默认中间件的路由
	r := gin.New()

	// 注册swagger
	r.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
	r.Group("/greenbook")
	// 注册路由
	r.POST("/login", Login)
	r.POST("/signup", SignUp)
	return r
}

func Login(c *gin.Context) {
	req := models.LoginReq{}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, gin.H{
			"msg": err.Error(),
		})
		return
	}
	// 调用业务逻辑
	if resp, code, err := logic.Login(req.Code); err != nil {
		c.JSON(500, gin.H{
			"msg":  err.Error(),
			"code": code,
		})
	} else {
		c.JSON(200, gin.H{
			"msg":  "success",
			"data": resp,
			"code": code,
		})
	}
}

func SignUp(c *gin.Context) {
	req := models.SignUpReq{}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, gin.H{
			"msg": err.Error(),
		})
		return
	}
	// 调用业务逻辑
	if code, err := logic.SignUp(req); err != nil {
		c.JSON(500, gin.H{
			"msg":  err.Error(),
			"code": code,
		})
	} else {
		c.JSON(200, gin.H{
			"msg":  "success",
			"code": code,
		})
	}
}
