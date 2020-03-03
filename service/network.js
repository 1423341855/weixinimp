export default function requests(options){

  return new Promise( (reselve,reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'get',
      data: options.data || {},
      success: function (res) {
         reselve(res);
      },
      fail: function (err) {
         reject(err);
      }
    })
  })
 
}