package models

const (
	ERROR     = 999
	UserExist = iota
	UserNotExist
	UserRegisterFailed
	UserRegisterSuccess
	UserExpired
	UserPasswordError
)

type LoginReq struct {
	Code string `json:"code" binding:"required"`
}

type SignUpReq struct {
	Code     string `json:"code" binding:"required"`
	UserName string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required"`
}

type User struct {
	OpenId     string `json:"open_id"`
	SessionKey string `json:"session_key"`
	UserName   string `json:"username" `
	Password   string `json:"password" `
}
