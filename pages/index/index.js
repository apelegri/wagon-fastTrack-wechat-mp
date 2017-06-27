//index.js
Page({
  data: {
   src:'http://os51j6pf4.bkt.clouddn.com/home-video.mp4'
  },
  jumpPage: function (){
    wx.redirectTo({
    url: '../overview/overview',
    fail: function(res) {},
    complete: function(res) {},
  })
 }
})
