// components/my-mslot/my-mslot.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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

  },

 //监听页面相关的生命周期
  pageLifetimes: {
    show: function () {
      console.log('页面创建完成');
    },
    hide: function () {
      console.log('页面已关闭');
    },
    resize: function (size) {
      console.log('页面尺寸已经改变');
    }
  },

  //监听组件本身的生命周期
  lifetimes:{
     created(){
       console.log('组件被创建出来');
     },
     attached(){
       console.log('组件被添加到页面');
     },
     ready(){
       console.log('组件被渲染出来');
     },
     moved(){
       console.log('组件被移动到另一个节点');
     },
    detached(){
       console.log('组件被移除掉');
     }
  },

  options:{
    multipleSlots:true
  }
})
