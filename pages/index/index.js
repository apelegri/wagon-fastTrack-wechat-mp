//index.js
Page({
  data: {
   src:'http://osadw33sx.bkt.clouddn.com/home-video.mp4'
  },
  jumpPage: function (){
    wx.navigateTo({
    url: '../overview/overview',
    fail: function(res) {},
    complete: function(res) {},
  })
 }
})
