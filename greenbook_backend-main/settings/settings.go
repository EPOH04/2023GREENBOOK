package settings

import (
	"fmt"
	"github.com/spf13/viper"
	"log"
)

var Conf = new(AppConfig)

type AppConfig struct {
	Mode         string `mapstructure:"mode"`
	Port         int    `mapstructure:"port"`
	Name         string `mapstructure:"name"`
	Version      string `mapstructure:"version"`
	StartTime    string `mapstructure:"start_time"`
	MachineID    int    `mapstructure:"machine_id"`
	*LogConfig   `mapstructure:"log"`
	*MySQLConfig `mapstructure:"mysql"`
	*RedisConfig `mapstructure:"redis"`
}

type MySQLConfig struct {
	Host         string `mapstructure:"host"`
	User         string `mapstructure:"user"`
	Password     string `mapstructure:"password"`
	DB           string `mapstructure:"dbname"`
	Port         int    `mapstructure:"port"`
	MaxOpenConns int    `mapstructure:"max_open_conns"`
	MaxIdleConns int    `mapstructure:"max_idle_conns"`
}

type RedisConfig struct {
	Host         string `mapstructure:"host"`
	Password     string `mapstructure:"password"`
	Port         int    `mapstructure:"port"`
	DB           int    `mapstructure:"db"`
	PoolSize     int    `mapstructure:"pool_size"`
	MinIdleConns int    `mapstructure:"min_idle_conns"`
}

type LogConfig struct {
	Level      string `mapstructure:"level"`
	Filename   string `mapstructure:"filename"`
	MaxSize    int    `mapstructure:"max_size"`
	MaxAge     int    `mapstructure:"max_age"`
	MaxBackups int    `mapstructure:"max_backups"`
}

func InitDirectly() {
	// 直接设置配置值
	viper.Set("mode", "debug")
	viper.Set("port", 8081)
	viper.Set("name", "greenbook")
	viper.Set("version", "1.0")
	viper.Set("start_time", "2024-5-14 12:00:00")
	viper.Set("machine_id", 1)

	// MySQL 配置
	viper.Set("mysql.host", "43.139.140.244")
	viper.Set("mysql.user", "root")
	viper.Set("mysql.password", "228809")
	viper.Set("mysql.dbname", "green_db")
	viper.Set("mysql.port", 3306)
	viper.Set("mysql.max_idle_conn", 10)
	viper.Set("mysql.max_open_conn", 100)

	// Log 配置
	viper.Set("log.level", "debug")
	viper.Set("log.path", "logs")
	viper.Set("log.filename", "green.log")
	viper.Set("log.max_size", 100)
	viper.Set("log.max_backups", 7)
	viper.Set("log.max_age", 7)

	// 将 viper 中的配置信息反序列化到 Conf 变量中
	if err := viper.Unmarshal(&Conf); err != nil {
		log.Fatalf("配置反序列化失败: %v", err)
	}

	// 打印配置以确认
	fmt.Printf("Configuration loaded: %+v\n", Conf)
}

func Init() error {
	InitDirectly()
	// 把读取到的配置信息反序列化到Conf变量中
	if err := viper.Unmarshal(&Conf); err != nil {
		panic(fmt.Errorf("unmarshal to Conf failed, err:%v", err))
	}
	return nil
}
