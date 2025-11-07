package mysql

import (
	"bluebell_backend/models"
	"github.com/medivhzhan/weapp/v3"
)

func CheckUserExist(req *weapp.LoginResponse) (info models.User, exist bool, err error) {
	err = db.Where("open_id = ?", req.OpenID).First(&info).Error
	if err != nil {
		if err.Error() == "record not found" {
			err = nil
			return
		}
		return
	}
	if info == (models.User{}) {
		exist = false
		return
	}
	exist = true
	return
}

func InsertUser(req *models.User) (err error) {
	err = db.Table("user").Create(&req).Error
	return
}
