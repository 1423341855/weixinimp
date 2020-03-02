// components/con-contap/con-contap.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentindex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handclick(event){
      //取值
      var datas = event.currentTarget.dataset;
      var dataindex = datas.index;
     
      //修改
     this.setData({
         currentindex:dataindex
     })

      //通知页面内的点击事件
     this.triggerEvent('itemclick',{index:dataindex, title:this.properties.titles[dataindex]})
    }
  }
})
