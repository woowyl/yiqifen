var app = getApp();

Page({
  data: {
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true,
    productData: [ {
      id: "288",
      intro: "小米无线鼠标",
      name: "小米无线鼠标",
      photo_x: "https://shop.xnnut.com/Data/UploadFiles/product/20170630/1498823998129871.jpg",
      price: "64.00",
      price_yh: "64.00",
      shiyong: "22"
    },{
      id: "286",
      intro: "64G 超薄迷你智能指纹解锁拍照学生手机",
      name: "Xiaomi/小米 小米手机5S ",
      photo_x: "https://shop.xnnut.com/Data/UploadFiles/product/20170630/1498823755863174.jpg",
      price: "1999.00",
      price_yh: "1 999.00",
      shiyong: "0",
    },{
      id: "284",
      intro: "4g松果芯片超薄迷你智能拍照学生手机",
      name: "Xiaomi/小米 小米手机5c ",
      photo_x: "https://shop.xnnut.com/Data/UploadFiles/product/20170630/1498823358368715.jpg",
      price: "1299.00",
      price_yh: "1299.00",
      shiyong: "7",
     },{
      id: "281",
      intro: "超长待机超薄迷你学生机智能机老人机",
      name: "Xiaomi/小米 红米手机4A ",
      photo_x: "https://shop.xnnut.com/Data/UploadFiles/product/20170630/1498820794749927.jpg",
      price: "699.00",
      price_yh: "599.00",
      shiyong: "2"}
     ],
    proCat:[],
    page: 2,
    index: 2,
    brand:[],
    // 滑动
    imgUrl: [],
    kbs:[],
    lastcat:[],
    course:[],
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
//跳转商品列表页   
listdetail:function(e){
    console.log(e.currentTarget.dataset.title)
    wx.navigateTo({
      url: '../listdetail/listdetail?title='+e.currentTarget.dataset.title,
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },

//品牌街跳转商家详情页
jj:function(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../listdetail/listdetail?brandId='+id,
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
//点击加载更多
getMore:function(e){
  var that = this;
  var page = that.data.page;
  wx.request({
      url: app.d.ceshiUrl + '/Api/Index/getlist',
      method:'post',
      data: {page:page},
      header: {
        'Content-Type':  'application/x-www-form-urlencoded'
      },
      success: function (res) {  
        var prolist = res.data.prolist;
        if(prolist==''){
          wx.showToast({
            title: '没有更多数据！',
            duration: 2000
          });
          return false;
        }
        //that.initProductData(data);
        that.setData({
          page: page+1,
          productData:that.data.productData.concat(prolist)
        });
        //endInitData
      },
      fail:function(e){
        wx.showToast({
          title: '网络异常！',
          duration: 2000
        });
      }
    })
},

  onLoad: function (options) {

  },
  onShareAppMessage: function () {
    return {
      title: app.d.appTitle,
      path: '/pages/index/index',
      success: function(res) {
        // 分享成功
      },
      fail: function(res) {
        // 分享失败
      }
    }
  },
  bindGetUserInfo: function (e) {
    console.log(e.detail.userInfo)
    app.getUserInfo();
    /*if (e.detail.userInfo) {
      //用户按了允许授权按钮
    } else {
      //用户按了拒绝按钮
    }*/
  }


});