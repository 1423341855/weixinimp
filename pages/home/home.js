const app = getApp()
console.log(app.globalData.name);
console.log(app.globalData.age);
Page({
  data:{
    name:'coderwhy',
    age:18,
    standts:[
      { id: 0, name: '鸣人', age: 32 },
      { id: 1, name: '路飞', age: 21 },
      { id: 2, name: '凯多', age: 45 },
      { id: 3, name: '善易', age: 17 }
    ],
    num:0,
    appname: app.globalData.name,
    appage: app.globalData.age
  },
  handclick(){
    console.log('按钮发生了点击');
    this.setData({
       num: this.data.num + 1
    })
  },
  handBclick(){
    this.setData({
      num: this.data.num - 1
    })
  },
  headgetUserInfo(event){
    console.log(event);
  }
})

