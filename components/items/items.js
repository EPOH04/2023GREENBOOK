// components/items/items.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    // 轮播图列表
    List:{
      type:Array,
      value:[]
    },
     // 城市名称
    Name:{
      type:String,
      value:""
    },
    // 当前页数
    Page:{
      type:Number,
      value:1
    },
    // 总长度
    Total:{
      type:Number,
      value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    Index:1,
    MaxLength:null,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    GetChange(e){
      console.log(e)
      this.setData({
        Index:e.detail.current + 1
      })
    }
  }
})