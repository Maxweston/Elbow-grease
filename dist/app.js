console.log(navigator.userAgent)
var browserSettings = {
  userAgent: navigator.userAgent,
  isMobile: false
}

// Get user agent
var userAgent = navigator.userAgent

// determin if mobile.
var isMobile = userAgent.match(/(Mobi)+/g)
console.log(isMobile)

if (isMobile !== null) {
  browserSettings.isMobile = true
}

console.log(browserSettings)
// if (userAgent = )

// function replay() {
//     console.log('video ended');
//     document.getElementsByTagName('video').currentTime = 0;
//     document.getElementsByTagName('video')[0].play();
// }

// function replay() {
//     console.log('video ended');
//     console.log(document.getElementsByTagName('video')[0].currentTime)
//     document.getElementsByTagName('video')[0].currentTime = 0;
//     console.log(document.getElementsByTagName('video')[0].currentTime)
//     document.getElementsByTagName('video')[0].play();
// }

function replay () {
  // console.log('replay run')
  // console.log(document.getElementsByTagName('video')[0].currentTime)
  document.getElementsByTagName('video')[0].loop = false
  // console.log(document.getElementsByTagName('video')[0].currentTime)
  document.getElementsByTagName('video')[0].load()
  // console.log(document.getElementsByTagName('video')[0].currentTime)
  document.getElementsByTagName('video')[0].play()
  // console.log(document.getElementsByTagName('video')[0].currentTime)
  // setTimeout(function () {
  //   console.log(document.getElementsByTagName('video')[0].currentTime)
  // }, 50)
}

// var myVideo = document.getElementById('video');
//
// if (typeof myVideo.loop == 'boolean') { // loop supported
//     myVideo.loop = true;
// } else { // loop property not supported
//     myVideo.on('ended', function () {
//     this.currentTime = 0;
//     this.play();
//     }, false);
// }
// myVideo.play();

// var vid = document.getElementsByTagName('video')[0]

// function restartVideo(){
//   console.log('resart video run')
//   vid.currentTime = 0.1; //setting to zero breaks iOS 3.2, the value won't update, values smaller than 0.1 was causing bug as well.
//   vid.play();
// }

//loop video
// if (vid) {
//   console.log('hello')
//   vid.addEventListener('ended', restartVideo, false);
// }


// document.getElementsByTagName('video')[0].onended = function () {
//   console.log(this)
//   this.load();
//   this.play();
// };
// document.body.querySelector('video.eg-video').addEventListener('ended', function () {
//   console.log('event handler fired')
//   document.body.querySelector('video').load();
//   document.body.querySelector('video').play();
// });

function checkClassExicts (element, checkClass) {
  var element = element.classList
  Object.keys(element).forEach(function (key) {
    console.log(element[key])
    // if (element[key] === checkClass) {
    //   return true
    // }
  })
}

function issueSlider () {
  console.log(document.querySelector('.issue-selector').children)
  var issues = document.querySelector('.issue-selector').children

  Object.keys(issues).forEach(function (issue) {
    // console.log(issue)
    // console.log(issues[issue])
    issues[issue].addEventListener('click', function () {
      // console.log('clicked' + issue)
      console.log(issues[issue].classList)
      console.log(checkClassExicts(issues[issue], 'active-slide'))
      // if(issues[issue].ha)
    })
  })

}

issueSlider()
