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

document.body.querySelector('video').addEventListener('ended', function () {
  document.body.querySelector('video').load();
  document.body.querySelector('video').play();
});
