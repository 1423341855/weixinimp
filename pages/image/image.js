// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgpath:''
 
  },

  getimg(){
    wx.chooseImage({
 
      success:(res) => {
        const path = res.tempFilePaths[0];

       this.setData({
         imgpath:path
       })
      },
    })
  },

  imageload(){
    console.log('图片加载完成');
  }
})