const content = document.querySelector('.container')

function setUserAgent (window, callback) {
  var userAgentProp = {
    get: function () { return ua },
  }

  var userAgentPlatform = {
    get: function () { return platform }
  }

  var userAgentVendor = {
    get: function () { return vendor }
  }

  Object.defineProperty(window.navigator, 'userAgent', userAgentProp)
  Object.defineProperty(window.navigator, 'platform', userAgentPlatform)
  Object.defineProperty(window.navigator, 'vendor', userAgentVendor)

  callback()
}

let frame = document.createElement('iframe')

document.body.appendChild(frame)

const frameWindow = frame.contentWindow

setUserAgent(frameWindow, () => {
  frame.src = 'https://www.instagram.com/?mobile=true'
  frame.classList.add('overtop')
})
