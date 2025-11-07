var amapFile = require('../../libs/amap-wx')
Page({
    data: {
        markers: [],
        latitude: '',
        longitude: '',
        textData: {},
    },

    getUserLocation() {
        var that = this;
        console.log("getLocation")
        wx.getLocation({
            type: "wgs84",
            success: function (res) {
                console.log("经纬度", res);
                this.latitude = res.latitude;
                this.longitude = res.longitude;
                that.getAddress(res.latitude, res.longitude); //转换为城市
            },
            fail: function () {
                console.log("fail")
            }
        })
    },

    onShow() {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            const page = getCurrentPages().pop();
            this.getTabBar().setData({
                value: '/' + page.route
            });
        }
    },


})

Component({
    data: {
        latitude: '',
        longitude: '',
        actionText: '',
        hotel_img: '/res/image/home/hotel.jpg',
        spot_img: '/res/image/home/spot.jpg',
        food_img: '/res/image/home/food.jpg',
        image: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
        value: '',
        list: [{
            value: 'label_1',
            icon: 'home',
            ariaLabel: '首页'
        },
        {
            value: 'label_2',
            icon: 'app',
            ariaLabel: '软件'
        },
        {
            value: 'label_4',
            icon: 'user',
            ariaLabel: '我的'
        },
        ],
    },

    options: {
        addGlobalClass: true,
        multipleSlots: true,
        styleIsolation: 'shared'
    },
    methods: {
        onLoad: function (options) {
            var that = this;
            var key = 'f5208fec9d22d94e2408a08667076c02';
            var myAmapFun = new amapFile.AMapWX({
                key: key
            });
            this.getUserLocation();
            myAmapFun.getRegeo({
                iconWidth: 50,
                iconHeight: 60,
                success: function (data) {
                    console.log(data);
                    var marker = [{
                        id: data[0].id,
                        latitude: data[0].latitude,
                        longitude: data[0].longitude,
                        iconPath: data[0].iconPath,
                        width: data[0].width,
                        height: data[0].height
                    }]
                    that.setData({
                        markers: marker
                    });
                    that.setData({
                        latitude: data[0].latitude
                    });
                    that.setData({
                        longitude: data[0].longitude
                    });
                    that.setData({
                        textData: {
                            name: data[0].name,
                            desc: data[0].desc
                        }
                    })
                },
                fail: function (info) {
                    // wx.showModal({title:info.errMsg})
                }
            })


        },
        getUserLocation() {
            var that = this;
            wx.getLocation({
                type: "wgs84",
                success: function (res) {
                    console.log("经纬度", res);
                    that.setData({
                        latitude: res.latitude,
                        longitude: res.longitude
                    });
                    that.getAddress(res.latitude, res.longitude); //转换为城市
                },
                fail: function () {
                    console.log("fail")
                }
            })
        },
        getAddress(latitude, longitude) {
            var that = this;
            var myAmapFun = new amapFile.AMapWX({
                key: "f5208fec9d22d94e2408a08667076c02"
            });
            myAmapFun.getRegeo({
                location: '' + longitude + ',' + latitude + '', //location的格式为'经度,纬度'
                success: function (data) {
                    console.log("转换成省市", data);
                    let {
                        province,
                        city,
                        district
                    } = data[0].regeocodeData.addressComponent;
                    city = (city || city.length > 0) ? city : "";
                    // console.log("省市区"：province + city + district)
                },
                fail: function (info) { }
            })
        },
        onIconTap(event) {
            const type = event.currentTarget.dataset.type;
            switch (type) {
                case 'food':
                    wx.navigateTo({
                        url: '/pages/newhome/newhome',
                    })
                    console.log('NN');
                    break;
                case 'spot':
                    wx.navigateTo({
                        url: '/pages/itinerary/itinerary',
                    })
                    console.log('景点tab被点击');
                    break;
                case 'hotel':
                    wx.navigateTo({
                        url: '/pages/lu_xian/lu_xian',
                    })
                    console.log('酒店tab被点击');
                    break;
                case 'epoh':
                    wx.navigateTo({
                        url: '/pages/newhome/newhome',
                    })
                default:
                    console.log('未知tab被点击');
            }
        },

        onAvatarTap() {
            console.log("Login")
            wx.navigateTo({
                url: '../login/login',
            })
        },

        navigateToDetail: function(event) {
            const url = '/pages/newhome/newhome'; // 目标页面路径
            wx.navigateTo({
              url: url
            });
          }

    }
});

