//index.js
//获取应用实例
Page({
  data: {
    results: []
  },
  //事件处理函数
  bindconfirm: function(e) {
    if (!e.detail.value) return;
    this.setData({
      results: [{
      name: e.detail.value,
      type: {
        id: 4,
        name: "有害垃圾"
      }
    },{
      name: e.detail.value+"2",
      type: {
        id: 1,
        name: "干垃圾"
      }
    },{
      name: "垃圾3",
      type: {
        id: 2,
        name: "湿垃圾"
      }
    },{
      name: "垃圾3",
      type: {
        id: 3,
        name: "可回收垃圾"
      }
    }]
  });
  },
  onLoad: function () {
    
  }
})
