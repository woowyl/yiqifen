//index.js
//获取应用实例
const app = getApp()

function login(){
  wx.login({
    success(res){
      if (res.code) {
        //发起网络请求
        wx.request({
          url: app.d.uniheart + '/passport/weapp-yiqifen/callback?code=' + res.code,
          success(res) {
            console.log('openid 结果：', res)
          }
        })
      } else {
        console.log('登录失败！' + res.errMsg)
      }
    }
  })
}

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    status: true,
    signstatus: false,
    point: app.d.point
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  gotoMe: function () {
    wx.navigateToMiniProgram({
      appId: 'wx8c777d630f2b78e3',
      path: '',
      extraData: {
        openId: 'xxxx',
        unionId: 'yyyy',
        action: 'bind-citi'
      },
      envVersion: 'trial',
      success(res) {
        console.log('跳转成功')
      },
      fail(error) {
        console.error(arguments);
      }
    })
  },
  onShow: function() {
    this.setData({
      point: app.d.point
    });
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      console.log(app.globalData.userInfo);
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        console.log('res = ', res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo

    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })

    login()
  },
  bindAccount: function() {
    if (this.data.status) {
      this.setData({
        status: false
      })
    } else {
      wx.navigateTo({
        url: '/pages/bind/bind'　　// 页面 A
      })
    }

  },
  bindSign: function() {
    if (!this.data.signstatus) {
      app.d.point = app.d.point+1;
      var score = this.data.point;
      this.setData({
        signstatus: true,
        point: score+1
      })
    }
  }
})
