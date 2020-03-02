// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isshow:true
  },

  showis(){
    this.setData({
      isshow: !this.data.isshow
    })    
  }
})