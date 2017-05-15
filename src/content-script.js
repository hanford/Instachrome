const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25'
 const vendor = 'Apple, Inc.'
 const platform = 'iPhone'

 let a = document.createElement('script')

 a.type = 'text/javascript'

 a.innerText += `
   Object.defineProperty(window.navigator, 'userAgent', { get: () => { return '${ua}'; } });
   Object.defineProperty(window.navigator, 'vendor', { get: () => { return '${vendor}'; } });
   Object.defineProperty(window.navigator, 'platform', { get: () => { return '${platform}'; } });
 `

 document.documentElement.insertBefore(a, document.documentElement.firstChild)

 document.addEventListener('beforeload', e => {
   Object.defineProperty(window.navigator, 'userAgent', { get: () => { return ua } })
   Object.defineProperty(window.navigator, 'vendor', { get: () => { return vendor } })
   Object.defineProperty(window.navigator, 'platform', { get: () => { return platform } })
 }, true)
