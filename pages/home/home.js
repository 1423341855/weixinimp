// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:['衣服','鞋子','羽绒服']

  },

  clicks(event){
    console.log('已经点击',event);
  },
  touchstart(){
    console.log("touchstart已经触发");
  },
  touchmove(){
    console.log("touchmove已经触发");
  },
  touchcancel(){
    console.log("touchcancel已经触发");
  },
  touchend(){
    console.log("touchend已经触发");
  },
  tap(){
    console.log("tap已经触发");
  },
  longpress(){
    console.log("longpress已经触发");
  },
  viewclick(event){
    console.log("成功触发事件",event);
    const index = event.currentTarget.dataset.index;
    const item = event.currentTarget.dataset.item;
    console.log(index,item);
  },

  captureA(){
    console.log('captureA')
  },
  captureB() {
    console.log('captureB')
  },
  captureC() {
    console.log('captureC')
  },

  clickA(){
    console.log('clickA')
  },
  clickB() {
    console.log('clickB')
  },
  clickC() {
    console.log('clickC')
  }
})