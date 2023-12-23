// loads before any other js

// const apiHost = 'https://kinopio.local:3000' // dev
const apiHost = 'https://api.kinopio.club' // prod

// https://stackoverflow.com/a/57527009
const disableIOSTextFieldZoom = () => {
  if (!isIOS()) { return }
  const element = document.querySelector('meta[name=viewport]')
  if (element !== null) {
    let content = element.getAttribute('content')
    let scalePattern = /maximum\-scale=[0-9\.]+/g
    if (scalePattern.test(content)) {
      content = content.replace(scalePattern, 'maximum-scale=1.0')
    } else {
      content = [content, 'maximum-scale=1.0'].join(', ')
    }
    element.setAttribute('content', content)
  }
}

// https://stackoverflow.com/questions/9038625/detect-if-device-is-ios/9039885#9039885
const isIOS = () => {
  /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
}

disableIOSTextFieldZoom()
