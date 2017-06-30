// pages/inquiries/inquiries.js
Page({
  backBtn: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  onShareAppMessage: function () {
    return {
      title: 'Le Wagon coding school',
      path: 'pages/index/index'
    }
  }
})