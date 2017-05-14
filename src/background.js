import { url } from './constants'

chrome.webRequest.onHeadersReceived.addListener(details => {
  for (let i = 0; i < details.responseHeaders.length; i++) {
    if (details.responseHeaders[i].name.toLowerCase() === 'x-frame-options') {
      details.responseHeaders.splice(i, 1)

      return {
        responseHeaders: details.responseHeaders
      }
    }
  }
}, {
  urls: [url]
}, ['blocking', 'responseHeaders'])
