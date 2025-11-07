Component({
    data: {
        selected: 0,
        color: "#fff",
        selectedColor: "#000",
        list: [
            {
                is_text:true,
                pagePath: "/pages/home/home",
                text:" 首页"
            },
            {
                is_text:false,
                iconPath: "/res/image/tabbar/plus.jpg",
                selectedIconPath: "/res/image/tabbar/plus.jpg",
            },
            {
                is_text:true,
                pagePath: "/pages/homepage/homepage",
                text:"我的"
            }
        ]
    },
    attached() {
    },
    methods: {
        switchTab(e) {
            const data = e.currentTarget.dataset
            const url = data.path
            wx.switchTab({ url })
            this.setData({
                selected: data.index
            })
        }
    }
})
