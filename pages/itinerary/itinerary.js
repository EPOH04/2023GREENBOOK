// pages/itinerary/itinerary.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // route组件对应的数据
    route:[{
      day_num:"01",
      spot_name:"洛阳",
      route:"国际牡丹园→洛阳古代艺术博物馆→隋唐洛阳国家遗址公园天堂明堂景区"
    },
    {
      day_num:"02",
      spot_name:"洛阳",
      route:"洛阳博物馆→龙门石窟→格兰特时尚主题酒店（洛阳龙门大道中国国花)"
    },
    {
      day_num:"03",
      spot_name:"洛阳",
      route:"洛阳博物馆→龙门石窟→格兰特时尚主题酒店（洛阳龙门大道中国国花)"
    }
  ],
  // overview组件对应的数据(行程天数，地点)
  overview:[2,6],
  // 每天每个景点介绍
  day:[
    {
      title:"第一天·洛阳",
      event:[
        {
          src:"/res/image/spot/luoyang/mudan.png",
          number:"01",
          type:"景点",
          name:"国际牡丹节",
          score:"4.4分",
          index: ["洛阳牡丹","古城"],// 可添加字符串，多个标签
          tips:"建议约1.5小时  |  全年07:30-21.30"
        },
        {
          src:"/res/image/spot/luoyang/yishubowuguan.png",
          number:"02",
          type:"景点",
          name:"洛阳古代艺术博物馆",
          score:"4.5分",
          index: ["亲子","历史遗迹"],// 可添加字符串，多个标签
          tips:"建议约2.5小时  |  全年08:00-17.30"
        },
        {
          src:"/res/image/spot/luoyang/yizhigongyuan.png",
          number:"03",
          type:"景点",
          name:"隋唐洛阳城国家遗址公园天堂明堂景区",
          score:"4.2分",
          index: ["洛阳必去地","洛阳亲子排名第2","亲子"],// 可添加字符串，多个标签
          tips:"建议约2.5小时  |  04/01-10/31 08:30-21:00"
        },
        {
          src:"/res/image/spot/luoyang/baimasi.png",
          number:"04",
          type:"景点",
          name:"白马寺",
          score:"4.5分",
          index: ["洛阳必去地","洛阳亲子排名第3"],// 可添加字符串，多个标签
          tips:"建议约2.5小时  |  4/1-10/7 07:40-18:40"
        },
        {
          src:"/res/image/spot/luoyang/jiudian.png",
          number:"05",
          type:"酒店",
          name:"格兰特时尚主题酒店",
          score:"4.3分",
          index: ["24小时前台","3期免息","中餐厅"],// 可添加字符串，多个标签
          tips:"高铁龙门站/市政府区"
        }
      ] 
    },
    {
      title:"第二天·洛阳",
      event:[
        {
          src:"/res/image/spot/luoyang/luoyangbowuguan.png",
          number:"06",
          type:"景点",
          name:"洛阳博物馆",
          score:"4.6分",
          index: ["洛阳亲子排名第4","亲子","历史遗迹"],// 可添加字符串，多个标签
          tips:"建议约3.0小时 | 全年 周一至周五，周日 10:00至18:00"
        },
        {
          src:"/res/image/spot/luoyang/longmenshiku.png",
          number:"07",
          type:"景点",
          name:"龙门石窟",
          score:"4.6分",
          index: ["洛阳必去地","洛阳亲子排名第1","亲子"],// 可添加字符串，多个标签
          tips:"建议约4.0小时  |  2/1-3/31"
        },
        {
          src:"/res/image/spot/luoyang/jiudian.png",
          number:"08",
          type:"酒店",
          name:"格兰特时尚主题酒店",
          score:"4.3分",
          index: ["24小时前台","3期免息","中餐厅"],// 可添加字符串，多个标签
          tips:"高铁龙门站/市政府区"
        }
      ]
    },
  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})