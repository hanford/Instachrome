import { url } from './constants'

const content = document.querySelector('.container')
const frame = document.createElement('iframe')

// append iframe to DOM before refrencing it's contentWindow
// otherwise contentWindow is undefined
document.body.appendChild(frame)
const { contentWindow } = frame

function setUserAgent (frameWindow, callback) {
  const userAgentProp = { get: () => ua }
  const userAgentPlatform = { get: () => platform }
  const userAgentVendor = { get: () => vendor }
  const { navigator } = frameWindow

  Object.defineProperty(navigator, 'userAgent', userAgentProp)
  Object.defineProperty(navigator, 'platform', userAgentPlatform)
  Object.defineProperty(navigator, 'vendor', userAgentVendor)

  callback()
}

setUserAgent(contentWindow, () => {
  frame.src = url

  frame.onload = () => {
    frame.classList.add('overtop')
  }
})
