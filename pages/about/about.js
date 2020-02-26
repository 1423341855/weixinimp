// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
   
  },
  
  // 页面的生命周期函数
  onLoad(){
    wx.request({
      url: 'http://127.0.0.1:8080/user/list?type=dataoneA',
      success: (res) => {
        const data = res.data;
        this.setData({
          list:data
        })
      }
    })
  },
  onReady(){
    console.log('onReady执行完毕');

  },
  onShow(){
    console.log('onshow执行完毕');
    console.log(this.data.list);
  },
  onHide(){
    console.log('onHide执行完毕');
  },
  onUnload(){
    console.log('onUnload执行完毕');
  },

  //监听滚动事件
  onPageScroll(obj){
  //console.log(obj);
  },
  
  //滚动到底部触发
  onReachBottom(){
    console.log('已经滚动到底部');
  },
  
  //下拉时触发
  onPullDownRefresh(){
    console.log('你已经下拉了此页面');
  }

})