package main

import (
	"bluebell_backend/dao/mysql"
	"bluebell_backend/logger"
	"bluebell_backend/routers"
	"bluebell_backend/settings"
	"fmt"
	"runtime"
)

// @host 127.0.0.1:8081
// @BasePath /api/v1/
func main() {
	//根据环境决定mysql的配置文件
	//如果是linux，就是prod
	//否则就是dev
	env := "dev"
	if runtime.GOOS == "linux" {
		env = "prod"
	} else {
		env = "dev"
	}
	//var confFile string
	//flag.StringVar(&confFile, "conf", "./conf/config.yaml", "配置文件")
	//flag.Parse()
	// 加载配置
	if err := settings.Init(); err != nil {
		fmt.Printf("load config failed, err:%v\n", err)
		return
	}
	// 初始化日志
	if err := logger.Init(settings.Conf.LogConfig, settings.Conf.Mode); err != nil {
		fmt.Printf("init logger failed, err:%v\n", err)
		return
	}
	// 初始化MySQL连接
	if err := mysql.Init(settings.Conf.MySQLConfig, env); err != nil {
		fmt.Printf("init mysql failed, err:%v\n", err)
		return
	}
	defer mysql.Close() // 程序退出关闭数据库连接

	//if err := redis.Init(settings.Conf.RedisConfig); err != nil {
	//	fmt.Printf("init redis failed, err:%v\n", err)
	//	return
	//}
	//
	//defer redis.Close()

	// 注册路由
	r := routers.SetupRouter(settings.Conf.Mode)
	err := r.Run(fmt.Sprintf(":%d", settings.Conf.Port))
	if err != nil {
		fmt.Printf("run server failed, err:%v\n", err)
		return
	}
}
