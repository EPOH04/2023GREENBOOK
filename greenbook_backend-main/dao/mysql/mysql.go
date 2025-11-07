package mysql

import (
	"bluebell_backend/settings"
	"fmt"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var db *gorm.DB

// Init 初始化MySQL连接
func Init(cfg *settings.MySQLConfig, env string) (err error) {
	// "user:password@tcp(host:port)/dbname"
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%d)/%s?parseTime=true&loc=Local", cfg.User, cfg.Password, cfg.Host, cfg.Port, cfg.DB)
	db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		fmt.Printf("mysql.Open failed, err:%v\n", err)
		return
	}
	fmt.Println("mysql.Open success")
	return
}

// Close 关闭MySQL连接
func Close() {
	sqlDB, err := db.DB()
	if err != nil {
		fmt.Printf("db.DB failed, err:%v\n", err)
		return
	}
	if err := sqlDB.Close(); err != nil {
		fmt.Printf("sqlDB.Close failed, err:%v\n", err)
		return
	}
	fmt.Println("sqlDB.Close success")
}
