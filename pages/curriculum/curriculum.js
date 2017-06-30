// pages/curriculum/curriculum.js
Page({
  data: {
    courses: [
      { id: 1, img:'http://osadw33sx.bkt.clouddn.com/lecture-img1.jpg',title: 'WEB 101',subTitle: 'How does the web work? '},
      { id: 2, img: 'http://osadw33sx.bkt.clouddn.com/lecture-img2.jpg', title: 'HTML & CSS', subTitle: 'Discover HTML, CSS by coding a simple profile page.'},
      { id: 3, img: 'http://osadw33sx.bkt.clouddn.com/lecture-img3.jpg', title: 'ADVANCED CSS', subTitle: 'Design culture and advanced CSS techniques.'},
      { id: 4, img: 'http://osadw33sx.bkt.clouddn.com/lecture-img4.jpg', title: 'Master the Terminal', subTitle: 'Learn the basics of the Command Line. Discover a new way to speak with your computer.' }, 
      { id: 5, img: 'http://osadw33sx.bkt.clouddn.com/lectute-img5.jpg', title: 'JavaScript programming 101', subTitle: 'Discover JS, your first programming language.'},
      { id: 6, img: 'http://osadw33sx.bkt.clouddn.com/lecture-img6.jpg', title: 'JavaScript: Ajax / JSON ', subTitle: 'Dive into the Restful APIs world.' },
      { id: 7, img: 'http://os51j6pf4.bkt.clouddn.com/img-1.png', title: 'WeChat MP framework', subTitle: 'Become familiar with mini-program framework' },
      { id: 8, img: 'http://osadw33sx.bkt.clouddn.com/lecture-img7.jpg', title: ' Startup Technical Workflow', subTitle: 'Work better, work faster, work together. Discover, workflow of the best tech startups.' }
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
      content: 'shanghai@lewagon.com',
      confirmText: "Ok",
      showCancel: false,
      success: function (res) {
        console.log('success')
      }
    })
  },
  onShareAppMessage: function () {
    return {
      title: 'Le Wagon coding school',
      path: 'pages/index/index'
    }
  }
})