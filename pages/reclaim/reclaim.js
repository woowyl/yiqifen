//logs.js

Page({
  data: {
    imgUrls: [
      '../../images/reclaim/cloth.jpg',
      '../../images/reclaim/pad.jpg',
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  alertValid: function() {
    wx.showToast({
      title: '等待商家入驻',
      icon: 'none',
      duration: 2000,
      success: function() {
        setTimeout(function() {
          wx.hideToast()
        },1000);
      }
    })    
  },
  alertValid2: function() {
    wx.showToast({
      title: '暂未开放',
      icon: 'none',
      duration: 2000,
      success: function() {
        setTimeout(function() {
          wx.hideToast()
        },1000);
      }
    })    
  }
})
