import React from 'react'
import ReactDOM from 'react-dom'
import Frame from './frame'

if (Frame.isReady()) {
  Frame.toggle()
} else {
  boot()
}

function boot() {
  const root = document.createElement('div')
  document.body.appendChild(root)

  ReactDOM.render(<Frame />, root)
}
