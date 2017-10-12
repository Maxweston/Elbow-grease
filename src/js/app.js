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

function replay () {
  document.getElementsByTagName('video')[0].loop = false
  document.getElementsByTagName('video')[0].load()
  document.getElementsByTagName('video')[0].play()
}


function showVideoOnLoad () {
  var video = document.getElementsByTagName('video')[0]
  console.log(video)
  video.addEventListener('canplaythrough', function () {
    addClass(document.querySelector('.main-wrapper'), 'fade-out')
  })
}

if (!isMobile) {
  showVideoOnLoad()
}

// Description Modal Logic
// MODAL HANDLING LOGIC
// ISSUE ONE MODAL
var issueOneTitle = document.querySelector('.issue-one--title')
var issueOneDescription = document.querySelector('.issue-one--description')
var issueOneModal = document.querySelector('.issue-one-modal')
var issueOneModalCloseIcon = document.querySelector('.issue-one-modal--close-icon')

issueOneTitle.addEventListener('click', function () {
  addClass(issueOneModal, 'modal-overlay-visibile')
})

issueOneDescription.addEventListener('click', function () {
  addClass(issueOneModal, 'modal-overlay-visibile')
})

issueOneModalCloseIcon.addEventListener('click', function () {
  removeClass(issueOneModal, 'modal-overlay-visibile')
})

// ISSUE ONE STOCKIST MODAL
var stockingBox = document.querySelector('.stocking-box')
var stockingLink = document.querySelector('.stocking-link')
var stockistIssueOneModal = document.querySelector('.stockist--issue-one-modal')
var stockistIssueOneModalCloseIcon = document.querySelector('.stockist-issue-one-modal--close-icon')

stockingBox.addEventListener('click', function () {
  addClass(stockistIssueOneModal, 'stockist-modal--overlay-visibile')
})

stockingLink.addEventListener('click', function () {
  addClass(stockistIssueOneModal, 'stockist-modal--overlay-visibile')
})

stockistIssueOneModalCloseIcon.addEventListener('click', function () {
  removeClass(stockistIssueOneModal, 'stockist-modal--overlay-visibile')
})




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
    issues[issue].addEventListener('click', function () {
      console.log(slides[issue])
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
