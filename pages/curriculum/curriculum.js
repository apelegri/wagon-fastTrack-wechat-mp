// pages/curriculum/curriculum.js
Page({
  data: {
    courses: [
      {
        id: 1,
        img: 'http://os51j6pf4.bkt.clouddn.com/img-1.png',
        title: 'AAAA'
      },
      {
        id: 2,
        img: 'http://os51j6pf4.bkt.clouddn.com/img-1.png',
        title: 'Web 101'
      }
      
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  changeIndicatorDots: function (e) {
    //this.setData({
      //indicatorDots: !this.data.indicatorDots
    //})
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  inquiryModal: function (){
    wx.showModal({
      title: 'INQUIRIES',
      content: 'apvnpizenvp',
      confirmText: "Ok",
      showCancel: false,
      success: function (res) {
        console.log('success')
      }
    })
  },
  conditionModal: function () {
    wx.showModal({
      title: 'CONDITIONS',
      content: 'apvnpizenvp',
      confirmText: "Ok",
      showCancel: false,
      success: function (res) {
        console.log('success')
      }
    })
  },
})