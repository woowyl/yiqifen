//index.js
//获取应用实例
const app = getApp()
const Data = {
  'glj': {
    cate: '干垃圾即其它垃圾，指除可回收物、有害垃圾、厨余垃圾（湿垃圾）以外的其它生活废弃物。干垃圾是对垃圾按照可回收垃圾、厨余垃圾、有害垃圾分类后剩余下来的一种垃圾。生活垃圾的具体分类标准可根据经济社会发展水平、生活垃圾特性和处置利用需要予以调整。',
    list:['湿纸巾','笔芯','扇子','锡纸']
  },
  'slj': {
    cate: '湿垃圾又称为厨余垃圾、有机垃圾，即易腐垃圾，指食材废料、剩菜剩饭、过期食品、瓜皮果核、花卉绿植、中药药渣等易腐的生物质生活废弃物。',
    list:['鱼子酱','黄鱼','海带','烤鸭']
  },
  'khslj': {
    cate: '可回收垃圾是指废纸张、废塑料、废玻璃制品、废金属、废织物等适合回收、可循环利用的生活废弃物',
    list:['文具盒','二手手机','电子产品','足球','书籍']
  },
  'yhlj': {
    cate: '有害垃圾指废电池、废灯管、废药品、废油漆及其容器等对人体健康或者自然环境造成直接或者潜在危害的生活废弃物。常见包括废电池、废荧光灯管、废灯泡、废水银温度计、废油漆桶、过期药品等。有害有毒垃圾需特殊正确的方法安全处理。',
    list:['X光片','干电池','电灯泡']
  }
}
const WasteSorting = {
  'glj': '干垃圾',
  'slj': '湿垃圾',
  'khslj': '可回收垃圾',
  'yhlj': '有害垃圾'
}

function loadData(type) {
  const self = this;
  wx.request({
    url: app.d.yiqifen + '/share/a/share/api/queryGarbage?type=' + WasteSorting[type],
    success(res) {
      self.setData({
        ...self.data,
        rbList: res.data.filter(r => r.type === WasteSorting[type]).map(r => r.name)
      })
    }
  })
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

    loadData.call(this, e.currentTarget.dataset.idx);
  },
  searchAction: function() {
    wx.navigateTo({
      url: '/pages/search/search'　　// 页面 A
    })
  },
  onLoad: function () {
    loadData.call(this, 'glj')
  },
  getUserInfo: function(e) {

  }
})
