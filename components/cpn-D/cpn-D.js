// components/cpn-D/cpn-D.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:'我是默认的标题',
      observer: function(newval,oldval){
        console.log(newval,oldval);
      }
    }
  },
  externalClasses: ['titcolor'],

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
