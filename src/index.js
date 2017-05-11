const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25'
const vendor = 'Apple, Inc.'
const platform = 'iPhone'

window.navigator.__defineGetter__('userAgent', () => ua)
window.navigator.__defineGetter__('appVersion', () => ua)
window.navigator.__defineGetter__('vendor', () => vendor)
window.navigator.__defineGetter__('platform', () => platform)


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

frame.src = 'https://www.instagram.com'

document.body.appendChild(frame)

setUserAgent(frame.contentWindow, () => {
})
