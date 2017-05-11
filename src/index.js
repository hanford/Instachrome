// const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25'

// window.navigator.__defineGetter__('userAgent', () => ua)
// window.navigator.__defineGetter__('appVersion', () => ua)

// function setUserAgent (window, callback) {
//   var userAgentProp = {
//     get: function () { return ua },
//   }

//   Object.defineProperty(window.navigator, 'userAgent', userAgentProp)

//   callback()
// }

// let frame = document.createElement('iframe')

// frame.src = ''

// document.body.appendChild(frame)

// setUserAgent(frame.contentWindow, () => {
//   frame.src = 'https://www.instagram.com'
// })
