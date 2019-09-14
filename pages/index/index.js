//index.js
//获取应用实例
const app = getApp()
const Data = {
  'glj': {
    cate: '干垃圾',
    list:['湿纸巾','笔芯','扇子','锡纸']
  },
  'slj': {
    cate: '湿垃圾',
    list:['鱼子酱','黄鱼','海带','烤鸭']
  },
  'khslj': {
    cate: '可回收垃圾',
    list:['文具盒','二手手机','电子产品','足球','书籍']
  },
  'yhlj': {
    cate: '有害垃圾',
    list:['X光片','干电池','电灯泡']
  }
}
Page({
  data: {
    type: 'glj',
    rbCate: Data['glj'].cate,
    rbList: Data['glj'].list
  },
  //事件处理函数
  changeTab: function(e) {
    if (this.data.type == e.currentTarget.dataset.idx){
      return;
    }
    this.setData({
      type: e.currentTarget.dataset.idx,
      rbCate: Data[e.currentTarget.dataset.idx].cate,
      rbList: Data[e.currentTarget.dataset.idx].list
    })
  },
  searchAction: function() {
    wx.navigateTo({
      url: '/pages/search/search'　　// 页面 A
    })
  },
  onLoad: function () {
    
  },
  getUserInfo: function(e) {

  }
})
