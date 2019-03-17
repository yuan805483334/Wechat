//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  onLoad: function () {
    this.login()
  },
  login(){
    app.user.CheckLogin().then(res=>{

    })
    
  }
})
