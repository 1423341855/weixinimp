App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (op) {

  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    //可以获取小程序进入的方式
   // console.log(options);

    //获取用户信息
    wx.getUserInfo({
      success:function(re){
         // console.log(re);
      }
    })
   
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('小程序已关闭');
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('小程序发生错误时');
  },
  globalData: {
    name:'onlywhy',
    age:18
  }
})
