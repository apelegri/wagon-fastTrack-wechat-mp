// pages/show/show.js
Page({
  data: {
    btnTitle: "NEXT LECTURE",
    courseId: null,
    courses: [
      {
        course_id: '1', numLecture: 'Lecture 01', titleLecture: 'Web 101', 
        teacherAvatar: 'http://osadw33sx.bkt.clouddn.com/sebastien-avatar2.png', 
        teacherName: 'Sebastien Dupuis', teacherDesc: 'X95, ex DemandWare APAC', subtitle: 'How does the web work? ',  desc1: '- Understand client/server model and HTTP.',  desc2: '- Restful APIs: Don’t reinvent the wheel! There’s an API for that. Understand what APIs really are and how to use them.', desc3: '- Jargon demystified: DNS, CDN, SSH, FTP, CMS…', desc4: '- State of the web development: technologies, frameworks, CMS…',desc5: '- Dive into the open-source: GitHub, Ruby Gems, NPM…', desc6: '- Programmers tools: TextEditor, Browser, Plugins.' ,  desc7: '- Use of web analyzers/web performance tools',desc8: '- ICP license: WTF?', desc9: '- Breakdown of the jobs in modern tech organizations',desc10: '- Assignment: readings?',
        numWorkshop: 'Workshop 01',
        workshopTitle: 'DESIGN SPRINT ',
        workshopTeacher:'Sebastien Dupuis / Thibault Genaitay',
        workshopTeacherDesc: 'X95, ex DemandWare APAC',
        workshopDesc: 'With your project team, build a first prototype using wireframes, Sketch mockups and Marvel.',
        workshopHomework: 'Homework: write the specifications of a new WeChat Mini-Program in Markdown format, share it through Github.'
         },

      { course_id: '2', 
      numLecture: 'Lecture 02', 
      titleLecture: 'HTML & CSS', 
      teacherAvatar: 'http://osadw33sx.bkt.clouddn.com/stephane-avatar2.png', 
      teacherName: 'Stephane Delgado', 
      teacherDesc: 'Le Wagon alumni, Vogue China creative director',
       subtitle: 'Discover HTML, CSS by coding a simple profile page. ', 
       desc1: '- Build a personal portfolio/resume.',  desc2: '- Code from scratch using Sublime/Emet.', desc3: '- Use Chrome inspector.',desc4: '- Resources: share best tools for front-end designers inspiration/productivity.', desc5: '- Dive into the open-source: GitHub, Ruby Gems, NPM…',desc6: '- Programmers tools: TextEditor, Browser, Plugins.', desc7: '- Assignment: make your profile page.',
      numWorkshop: 'Workshop 02',
      workshopTitle: 'HTML5',
      workshopTeacher: 'Stephane Delgado',
      workshopTeacherDesc: 'Le Wagon alumni, Vogue China creative director',
      workshopDesc: 'Learn responsive-design principles with bootstrap and build an H5 event flyer for WeChat.'
      },
  
      { course_id: '3', 
      numLecture: 'Lecture 03', 
      titleLecture: 'Advanced CSS ', 
      teacherAvatar: 'http://osadw33sx.bkt.clouddn.com/stephane-avatar2.png', 
      teacherName: 'Stephane Delgado', 
      teacherDesc: 'Le Wagon alumni, Vogue China creative director', 
      subtitle: 'Design culture and advanced CSS techniques.', 
      desc1: '- Components-based design culture.',  desc2: '- Typography.',desc3: '- Flexbox.', desc4: '- Gradients.',desc5: '- SVG.',desc6: '- Assignment: Build the product hunt dashboard with flexbox.',
      numWorkshop: 'Workshop 03',
      workshopTitle: 'COMPONENTS',
      workshopTeacher: 'Stephane Delgado',
      workshopTeacherDesc:'Le Wagon alumni, ssVogue China creative director',
      workshopDesc: 'Be the creator, code your own UI components. From Sketch mockups to CSS3: build your own library of UI components for your group project. Discover the Animate.css library. Discover the SCSS pre-processor.'
      },
      
      { course_id: '4', numLecture: 'Lecture 04', titleLecture: 'Master the Terminal', 
        teacherAvatar: 'http://osadw33sx.bkt.clouddn.com/maria-avatar.jpg', 
      teacherName: 'Maria Altyeva', teacherDesc: 'Yale alumni, Software engineer',  subtitle: 'Discover a new way to speak with your computer.', desc1: '- CLI 101.', desc2: '- Existence of Package Managers: brew, npm, bower, pip, composer...', desc3: '- Learn enough CL to be dangerous.', desc4: '- Discover team collaboration: Git & Github for Beginners.', desc5: '- Assignment: Deploy your profile page on GitHub pages.',
      numWorkshop: 'Workshop 04',
      workshopTitle: 'TEAM WORKFLOW',
      workshopTeacher: 'Maria Altyeva',
      workshopTeacherDesc: 'Yale alumni, Software engineer',
      workshopDesc: 'Install a Wordpress/Middleman website on a server using command lines, practice team workflow via Git branches to edit a complex static site.'
      },

      { course_id: '5', 
      numLecture: 'Lecture 05', 
      titleLecture: 'JavaScript programming 101',
      teacherAvatar: 'http://osadw33sx.bkt.clouddn.com/michaeljhon-avatar.jpg', 
      teacherName: 'Michaeljohn Clement', 
      teacherDesc: 'Musician, Software engineer',  
      subtitle: 'Discover JS, your first programming language.', 
      desc1: '- Variables.', desc2: '- Loops.', desc3: '- Objects.', desc4: '- Functions.', desc5: '- Assignment: build a service to split the bill in JS.',
      numWorkshop: 'Workshop 05', 
      workshopTitle: 'THE DOM',
      workshopTeacher: 'Michaeljohn Clement',
      workshopTeacherDesc: 'Musician, Software engineer',
      workshopDesc: 'Discover Javascript events. Learn how to manipulate the DOM with jQuery. Build a fake Inbox.'
       },

      { course_id: '6', numLecture: 'Lecture 06', titleLecture: 'JavaScript: Ajax / JSON', 
        teacherAvatar: 'http://osadw33sx.bkt.clouddn.com/gregoire-avatar.jpg', 
      teacherName: 'Gregoire Thiebault', teacherDesc: '31Ten CTO', subtitle: 'Dive into the Restful APIs world.', desc1: '- What is an API?', desc2: '- List of top APIs to use in China.', desc3: '- Restful APIs principles.', desc4: '- How to read documentations.', desc5: '- Use of jQuery for Ajax requests.', desc6: 'Assignment: Use the Wagon Chat API to chat and post some gossips on your wagon-mates.',
      numWorkshop: 'Workshop 06',
      workshopTitle: 'HTTP REQUESTS',
      workshopTeacher: 'Gregoire Thiebault',
      workshopTeacherDesc: '31Ten CTO',
      workshopDesc: 'Practice with GET, POST, UPDATE, DELETE requests.Build a map with markers (AMap or Google).'
      },

      { course_id: '7', numLecture: 'Lecture 07', titleLecture: 'WeChat MP framework', 
        teacherAvatar: 'http://osadw33sx.bkt.clouddn.com/thibault-avatar.jpg', 
      teacherName: 'Thibault Genaitay', teacherDesc: 'Le Wagon driver', subtitle: 'Master WeChat mini-program framework.', desc1: '- IDE usage.', desc2: '- Mini-app configuration.', desc3: '- Views, WXML, WXSS.', desc4: '- Events binding.', desc5: '- Logical layer.', desc6: 'APIs.', desc7: 'Assignment: update the specifications of your mini-program, build user stories on Trello.',
      numWorkshop: 'Workshop 07',
      workshopTitle: 'Hackathon part 1: MP SETUP',
      workshopTeacher: 'Thibault Genaitay',
      workshopTeacherDesc: 'Le Wagon driver',
      workshopDesc: 'Make a Mini-program — part 1.'
      },

      { course_id: '8', numLecture: 'Lecture 08', titleLecture: 'Startup Technical Workflow', 
        teacherAvatar: 'http://osadw33sx.bkt.clouddn.com/dounan-avatar.jpg', 
      teacherName: 'Dounan Hu', teacherDesc: 'Cambridge alumni, Astronomist, startups CTO', subtitle: 'Work better, work faster, work together. Discover the workflow of the best tech startups.', desc1: '- Agile workflow.', desc2: '- Versionning.', desc3: '- Continuous deployment.', desc4: '- Docker.', desc5: '- Assignment: Continue working on your mini-program.',
      numWorkshop: 'Workshop 08',
      workshopTitle: 'Hackathon part 2: MP FINAL TWEAKS',
      workshopTeacher: 'Dounan Hu',
      workshopTeacherDesc: 'Cambridge alumni, Astronomist, startups CTO',
      workshopDesc: 'Make a Mini-program — part 2.'
      },
    ]
  },
  onLoad: function (e) {
    var findId = e.id
    console.log("onload")
    console.log(findId)
    this.setData({
      courseId: findId
    })
    if (findId == 7) {
      this.setData({
        btnTitle: "PREVIOUS LECTURE"
      })
    }
  },
  nextLecture: function (e) {
    console.log("current is")
    console.log(e)
    var currentID = e.target.id
    console.log(currentID)
    var nextID = ++currentID
    console.log("next is")
    console.log(nextID)
    if (nextID <= 8) {
      wx.redirectTo({
        url: '../show/show?id=' + nextID
      })
    } else {
      wx.navigateTo({
        url: '../curriculum/curriculum',
      })
    }
  },
  previousLecture: function(e){

    console.log(e)
    var currentID = e.target.id
    console.log("current is")
    console.log(currentID)
    console.log("previous is")
    var previousID = --currentID
    console.log(previousID)
    if (previousID === 0) {
      wx.navigateBack({
        delta: 1
      })
    } else {
      wx.redirectTo({
        url: '../show/show?id=' + previousID
      })
    }   
  }
})