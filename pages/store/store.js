//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    bindExchange: function () {
        wx.navigateTo({
            url: '/pages/exchange/exchange'　　// 页面 A
        })
    },

    getUserInfo: function (e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    alertValid2: function () {
        wx.showToast({
            title: '暂未开放',
            icon: 'none',
            duration: 2000,
            success: function () {
                setTimeout(function () {
                    wx.hideToast()
                }, 1000);
            }
        })
    }
})
