// pages/curriculum/curriculum.js
Page({
  data: {
    courses: [
      {id: 1,img:'http://os51j6pf4.bkt.clouddn.com/img-1.png',title: 'WEB 101',subTitle: 'How does the web work? '},
      {id: 2, img: 'http://os51j6pf4.bkt.clouddn.com/img-1.png', title: 'HTML & CSS', subTitle: 'Discover HTML, CSS by coding a simple profile page.'},
      { id: 3, img: 'http://os51j6pf4.bkt.clouddn.com/img-1.png', title: 'ADVANCED CSS', subTitle: 'Design culture and advanced CSS techniques.'},
      { id: 4, img: 'http://os51j6pf4.bkt.clouddn.com/img-1.png', title: 'Master the Terminal', subTitle: 'Learn the basics of the Command Line. Discover a new way to speak with your computer.' }, 
      {id: 5, img: 'http://os51j6pf4.bkt.clouddn.com/img-1.png', title: 'JavaScript programming 101', subTitle: 'Discover JS, your first programming language.'},
      { id: 6, img: 'http://os51j6pf4.bkt.clouddn.com/img-1.png', title: 'JavaScript: Ajax / JSON. ', subTitle: 'Dive into the Restful APIs world.' },
      { id: 7, img: 'http://os51j6pf4.bkt.clouddn.com/img-1.png', title: 'WeChat MP framework', subTitle: 'Become familiar with mini-program framework' },
      { id: 8, img: 'http://os51j6pf4.bkt.clouddn.com/img-1.png', title: ' Startup Technical Workflow', subTitle: 'Work better, work faster, work together. Discover, workflow of the best tech startups.' }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  showRedirect: function (e) {
    console.log(e)
    console.log(e.currentTarget.id)
    wx.navigateTo({
      url: '../show/show?id=' + e.currentTarget.id
    })
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
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