//index.js
//获取应用实例
var app = getApp();

Page({
  data: {
    results: []
  },
  //事件处理函数
  bindconfirm: function(e) {
    if (!e.detail.value) return;

    var self = this;
    console.log(app.d.point);
    app.d.point = app.d.point+1;
    wx.request({
      url: app.d.yiqifen + '/share/a/share/api/queryGarbage?openId=1234567&name=' + e.detail.value,
      method: 'get',
      success: function (res) {
        if(res.data && res.data.length > 0) {
          self.setData({
            results: res.data.map(r => ({
              name: r.name,
              type: {
                id: r.id,
                name: r.type
              }
            }))
          });
        }else{
          self.setData({
            results: [{
              name: '暂无结果',
              type: {
                name: '未知'
              }
            }]
          })
        }
      },
      error: function (error) {
        wx.showToast({
          title: '网络异常！',
          duration: 2000
        })
      }
    });
  },
  onLoad: function () {

  }
})
