//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    type: 'glj',
  },
  //事件处理函数
  changeTab: function(e) {
    if (this.data.type == e.currentTarget.dataset.idx){
      return;
    }
    this.setData({
      type: e.currentTarget.dataset.idx
    })
  },
  onLoad: function () {
    
  },
  getUserInfo: function(e) {

  }
})
