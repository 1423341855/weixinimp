// components/cpn-tabs/cpn-tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tits:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
     num:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    numclk(event){
      var indexs = event.currentTarget.dataset.ind;

     this.setData({
       num: indexs
     })
    
     this.triggerEvent('skyclick',{indexs,item:this.properties.tits[indexs]})
    }
  }
})
