// pages/show/show.js
Page({
  data: {
    btnTitle: "NEXT LECTURE",
    courseId: null,
    courses: [
      { course_id: '1', numLecture: 'Lecture 01', titleLecture: 'Web 101', teacherAvatar: 'http://os51j6pf4.bkt.clouddn.com/sebastien-dupuis.png',teacherName: 'Sebastien Dupuis',  teacherDesc: 'X95 - Ex DemandWare & Splio', subtitle: 'How does the web work? ',  desc1: '- Understand client/server model and HTTP.',  desc2: '- Restful APIs: Don’t reinvent the wheel! There’s an API for that. Understand what APIs really are and how to use them.', desc3: '- Jargon demystified: DNS, CDN, SSH, FTP, CMS…', desc4: '- State of the web development: technologies, frameworks, CMS…',desc5: '- Dive into the open-source: GitHub, Ruby Gems, NPM…', desc6: '- Programmers tools: TextEditor, Browser, Plugins.' ,  desc7: '- Use of web analyzers/web performance tools',desc8: '- ICP license: WTF?', desc9: '- Breakdown of the jobs in modern tech organizations',desc10: '- Assignment: readings?', },

      { course_id: '2', numLecture: 'Lecture 02', titleLecture: 'HTML & CSS', 
      teacherAvatar: '',  
      teacherName: 'Stephane Delgado',  
      teacherDesc: '', 
      subtitle: 'Discover HTML, CSS by coding a simple profile page. ', desc1: '- Build a personal portfolio/resume.',  desc2: '- Code from scratch using Sublime/Emet.', desc3: '- Use Chrome inspector.',desc4: '- Resources: share best tools for front-end designers inspiration/productivity.', desc5: '- Dive into the open-source: GitHub, Ruby Gems, NPM…',desc6: '- Programmers tools: TextEditor, Browser, Plugins.', desc7: '- Assignment: make your profile page.'},
  
      { course_id: '3', numLecture: 'Lecture 03', titleLecture: 'Advanced CSS ', 
      teacherAvatar: '', 
      teacherName: 'Stephane Delgado', 
      teacherDesc: '', 
      subtitle: 'Design culture and advanced CSS techniques.', desc1: '- Components-based design culture.',  desc2: '- Typography.',desc3: '- Flexbox.', desc4: '- Gradients.',desc5: '- SVG.',desc6: '- Assignment: Build the product hunt dashboard with flexbox.'},
      
      { course_id: '4', numLecture: 'Lecture 04', titleLecture: 'Master the Terminal', 
      teacherAvatar: '', 
      teacherName: 'Maria Altyeva', 
      teacherDesc: '', 
      subtitle: 'Discover a new way to speak with your computer.', desc1: '- CLI 101.', desc2: '- Existence of Package Managers: brew, npm, bower, pip, composer...', desc3: '- Learn enough CL to be dangerous.', desc4: '- Discover team collaboration: Git & Github for Beginners.', desc5: '- Assignment: Deploy your profile page on GitHub pages.'},

      { course_id: '5', numLecture: 'Lecture 05', titleLecture: 'JavaScript programming 101', 
      teacherAvatar: '', 
      teacherName: 'Michaeljohn Clement', 
      teacherDesc: '', 
      subtitle: 'Discover JS, your first programming language.', desc1: '- Variables.', desc2: '- Loops.', desc3: '- Objects.', desc4: '- Functions.', desc5: '- Assignment: build a service to split the bill in JS.'  },

      { course_id: '6', numLecture: 'Lecture 06', titleLecture: 'JavaScript: Ajax / JSON', 
      teacherAvatar: '', 
      teacherName: 'Michaeljohn Clement', 
      teacherDesc: '', 
      subtitle: 'Dive into the Restful APIs world.', desc1: '- What is an API?', desc2: '- List of top APIs to use in China.', desc3: '- Restful APIs principles.', desc4: '- How to read documentations.', desc5: '- Use of jQuery for Ajax requests.', desc6: 'Assignment: Use the Wagon Chat API to chat and post some gossips on your wagon-mates.'},

      { course_id: '7', numLecture: 'Lecture 07', titleLecture: 'WeChat MP framework', 
      teacherAvatar: '', 
      teacherName: 'Michaeljohn Clement ', 
      teacherDesc: '', 
      subtitle: 'Master WeChat mini-program framework.', desc1: '- IDE usage.', desc2: '- Mini-app configuration.', desc3: '- Views, WXML, WXSS.', desc4: '- Events binding.', desc5: '- Logical layer.', desc6: 'APIs.', desc7: 'Assignment: update the specifications of your mini-program, build user stories on Trello.'},

      { course_id: '8', numLecture: 'Lecture 08', titleLecture: 'Startup Technical Workflow', 
      teacherAvatar: '', 
      teacherName: 'Dounan Hu', 
      teacherDesc: '', subtitle: 'Work better, work faster, work together. Discover the workflow of the best tech startups.', desc1: '- Agile workflow.', desc2: '- Versionning.', desc3: '- Continuous deployment.', desc4: '- Docker.', desc5: '- Assignment: Continue working on your mini-program.'},
    ]
  },
  onLoad: function(e) {
    var findId = e.id
    console.log(findId)
    this.setData({
      courseId:findId
    })
    if (currentID == 7) {
      this.setData({
        btnTitle: "PREVIOUS LECTURE"
      })
    }
  },
  nextLecture: function(e){
    console.log(e)
    var currentID = e.target.id
    console.log(currentID)
    var nextID = ++currentID
    console.log(nextID)
    if (nextID < 8){
      wx.redirectTo({
        url: '../show/show?id=' + nextID
    })
    } else {
      wx.navigateTo({
        url: '../curriculum/curriculum',
      })
    }   
  }
})