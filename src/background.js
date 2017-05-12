const domain = 'https://www.instagram.com/*'

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
  urls: [domain]
}, ['blocking', 'responseHeaders'])
