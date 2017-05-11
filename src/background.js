const domain = '<all_urls>'
const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25'

chrome.webRequest.onBeforeSendHeaders.addListener(details => {
    for (var i = 0; i < details.requestHeaders.length; ++i) {
      if (details.requestHeaders[i].name.toLowerCase() === 'user-agent') {
        details.requestHeaders[i].value = ua
        break
      }
    }

    return { requestHeaders: details.requestHeaders }
  },
  {urls: [domain]},
  ['blocking', 'requestHeaders']
)

chrome.webRequest.onHeadersReceived.addListener(details => {
  for (var i = 0; i < details.responseHeaders.length; ++i) {
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
