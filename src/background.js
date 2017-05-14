import { attachHeadersListener } from 'chrome-sidebar'
import { url } from './constants'

chrome.browserAction.onClicked.addListener(tab => {
  console.log('Browser Action Triggered')
  // for the current tab, inject the "inject.js" file & execute it
  chrome.tabs.executeScript(tab.id, {
    file: 'browser.js'
  })
})

attachHeadersListener({
  webRequest: chrome.webRequest,
  hosts: url,
  iframeHosts: url,
  overrideFrameOptions: true
})
