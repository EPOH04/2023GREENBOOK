package logic

import (
	"bluebell_backend/dao/mysql"
	"bluebell_backend/models"
	"fmt"
	"github.com/medivhzhan/weapp/v3"
)

var sdk *weapp.Client

func init() {
	sdk = weapp.NewClient("wx6e5c1909c5329e1e", "4e33bd22782c2a65fd798ba85d8cc48e")
}

// SignUp 注册业务逻辑
func SignUp(req models.SignUpReq) (RetCode int, err error) {
	resp, err := sdk.Login(req.Code)
	if err != nil {
		return models.ERROR, fmt.Errorf("sdk.Login failed, err:%v", err)
	}
	if resp.GetResponseError() != nil {
		return models.ERROR, fmt.Errorf("sdk.Login failed, err:%v", resp.GetResponseError())
	}
	//注册数据库
	mdl := models.User{
		OpenId:     resp.OpenID,
		SessionKey: resp.SessionKey,
		UserName:   req.UserName,
		Password:   req.Password,
	}
	err = mysql.InsertUser(&mdl)
	if err != nil {
		fmt.Println("InsertUser failed, err:", err)
		RetCode = models.ERROR
		return
	}
	RetCode = models.UserRegisterSuccess
	return
}

// Login 登录业务逻辑代码
func Login(code string) (info models.User, RetCode int, err error) {
	resp, err := sdk.Login(code)
	if err != nil {
		return models.User{}, models.ERROR, fmt.Errorf("sdk.Login failed, err:%v", err)
	}
	if resp.GetResponseError() != nil {
		return models.User{}, models.ERROR, fmt.Errorf("sdk.Login failed, err:%v", resp.GetResponseError())
	}
	//查询数据库中的open_id是否存在
	info, exist, err := mysql.CheckUserExist(resp)
	if err != nil {
		fmt.Println("CheckUserExist failed, err:", err)
		RetCode = models.ERROR
		return
	}
	if !exist {
		RetCode = models.UserNotExist
		fmt.Println("用户不存在，需要注册")
	}
	RetCode = models.UserExist
	return
}
