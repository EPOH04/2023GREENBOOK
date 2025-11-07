// component/scenic-spot/scenic-spot.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src:{
        type:String,
        value:"/res/image/spot/luoyang/mudan.png"
    },
    number:{
      type:String,
      value:"01"
    },
    type:{
      type:String,
      value:"景点"
    },
    name:{
        type:String,
        value:"国际牡丹节"
    },
    score:{
        type:String,
        value:"4.4分"
    },
    index:{
        type:Array,
        // 可添加字符串，多个标签
        value:["洛阳牡丹","古城"]
    },
    tips:{
        type:String,
        value:"建议约1.5小时  |  全年07:30-21.30"
    }
  },
  
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})