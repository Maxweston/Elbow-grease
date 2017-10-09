console.log(navigator.userAgent)
var browserSettings = {
  userAgent: navigator.userAgent,
  isMobile: false
}

// Get user agent
var userAgent = navigator.userAgent
var video = document.getElementsByTagName('video')[0]

// determin if mobile.
var isMobile = userAgent.match(/(Mobi)+/g)
console.log(isMobile)

if (isMobile !== null) {
  browserSettings.isMobile = true
}

console.log(browserSettings)

if (isMobile) {
  video.remove()
}
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

// function showVideoOnLoad () {
//   // var video = document.getElementsByTagName('video')[0]
//   // console.log(video)
//   video.addEventListener('canplaythrough', function () {
//     addClass(document.querySelector('.main-wrapper'), 'fade-out')
//   })
// }

// showVideoOnLoad()

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
// var sliderState = {
//   currentActiveSlideIndex: 0
//   slidesOnleft: [],
//   slidesOnRight: [1]
// }

// Description Modal Logic

function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}

// function checkClassExicts (element, checkClass) {
//   var element = element.classList
//   var foundMatch = false
//   // console.log(element)
//   Object.keys(element).forEach(function (key) {
//     // console.log(element[key])
//     if (element[key] === checkClass) {
//       // console.log('here')
//       foundMatch = true
//       return
//     }
//   })
//
//   return foundMatch
// }

function getActiveIndex () {
  var slides = document.querySelector('.issue-slider-section').children
  var position
  Object.keys(slides).forEach(function (key) {
    if (hasClass(slides[key], 'active-slide')) {
      position = key
      return
    }
  })

  return position
}

function getCurrentIndex (slide) {

}

function issueSlider () {
  console.log(document.querySelector('.issue-selector').children)
  var issues = document.querySelector('.issue-selector').children


  console.log(issues)

  var slides = document.querySelector('.issue-slider-section').children
  console.log(slides)

  Object.keys(issues).forEach(function (issue) {
    // console.log(issue)
    // console.log(issues[issue])
    issues[issue].addEventListener('click', function () {
      // console.log('clicked' + issue)
      // console.log(issues[issue].classList)
      console.log(slides[issue])
      // console.log(checkClassExicts(slides[issue], 'active-slide'))
      sliderController(slides[issue], issue)
    })
  })

}

function sliderController (selectedSlide, index) {
  console.log(selectedSlide)
  // chnage active selector
  changeSelectorActiveIndex(index)
  console.log(hasClass(selectedSlide, 'active-slide'))
  if (!hasClass(selectedSlide, 'active-slide')) {
    console.log(getActiveIndex())
    var currentActiveIndex = getActiveIndex()
    var currentSlide = document.querySelector('.issue-slider-section').children[currentActiveIndex]
    var nextCurrentSlide = document.querySelector('.issue-slider-section').children[index]
    removeClass(currentSlide, 'active-slide')
    // addClass(nextCurrentSlide, 'active-slide')
    if (currentActiveIndex < index) {
      addClass(currentSlide, 'slide-on-left')
      addClass(nextCurrentSlide, 'active-slide')
    } else {
      addClass(currentSlide, 'slide-on-right')
      addClass(nextCurrentSlide, 'active-slide')
    }
  }
}

function changeSelectorActiveIndex (index) {
  // get selectors in the list
  var selectors = document.querySelector('.issue-selector').children
  // loop all selectors in the list
  Object.keys(selectors).forEach(function(selector) {
    // remove active class from the current active
    if (hasClass(selectors[selector], 'active-issue')) {
      removeClass(selectors[selector], 'active-issue')
    }
  })

  // add new class to the new active
  addClass(selectors[index], 'active-issue')
}

issueSlider()

function hardWorkModal () {
  var modal = document.getElementsByClassName('hard-work-modal')
  var targetElement = document.getElementsByClassName('hard-work')
  targetElement[0].addEventListener('mouseenter', function () {
    modal[0].style.display = "block"
  })

  targetElement[0].addEventListener('mouseleave', function () {
    modal[0].style.display = "none"
  })
}

function strugglesModal () {
  var modal = document.getElementsByClassName('struggles-modal')
  var targetElement = document.getElementsByClassName('struggles')
  targetElement[0].addEventListener('mouseenter', function () {
    modal[0].style.display = "block"
  })

  targetElement[0].addEventListener('mouseleave', function () {
    modal[0].style.display = "none"
  })
}

function adversityModal () {
  var modal = document.getElementsByClassName('face-adversity-modal')
  var targetElement = document.getElementsByClassName('face-advercity')
  targetElement[0].addEventListener('mouseenter', function () {
    modal[0].style.display = "block"
  })

  targetElement[0].addEventListener('mouseleave', function () {
    modal[0].style.display = "none"
  })
}

if (!browserSettings.isMobile) {
  console.log('loading click events')
  hardWorkModal()
  strugglesModal()
  adversityModal()
}
