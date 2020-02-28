// pages/wxss/wxss.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   name:'啦啦啦',
   nameB:'呼呼呼',
   age:14,
   nowTime:new Date().toLocaleString(),
   flag:false,
   isshow:true,
   score:70,
   movel:['火影忍者','海贼王','妖精的尾巴'],
   number:[
     [2,3,4,55,11,22,11],
     [23,44,11,1,11,11,22],
     [24,22,11,55,55,33]
   ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(() => {
      this.setData({
        nowTime:new Date().toLocaleString()
      })
    },1000)
     
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  flags(){
    this.setData({
      flag:!this.data.flag
    })
    console.log(this.data.flag);
  },
  showB(){
    this.setData({
      isshow:!this.data.isshow
    })
  }
})