const form = document.getElementById('subscribe-by-email')
let savingBadge, successBadge, errorBadge, resultDescription

const clearAll = () => {
  savingBadge.classList.add('hidden')
  successBadge.classList.add('hidden')
  errorBadge.classList.add('hidden')
  resultDescription.classList.add('hidden')
}

const showSuccess = () => {
  clearAll()
  const form = document.getElementById('subscribe-by-email')
  form.classList.add('hidden')
  successBadge.classList.remove('hidden')
  showDescription('( ´ ▽ ` )ﾉ Thanks! I just sent you a welcome email')
}

const showError = (message) => {
  message = message || '(シ_ _)シ Something went wrong, please refresh and try again'
  clearAll()
  errorBadge.classList.remove('hidden')
  showDescription(message)
}

const showDescription = (message) => {
  resultDescription.classList.remove('hidden')
  resultDescription.innerText = message
}

// on submit

const submitForm = async (event) => {
  event.preventDefault()
  const email = event.target[0].value
  console.log('🍄', email)
  savingBadge = document.getElementById('saving-badge')
  successBadge = document.getElementById('success-badge')
  errorBadge = document.getElementById('error-badge')
  resultDescription = document.getElementById('result-description')
  clearAll()
  if (!email) {
    showError('Email address is missing')
    return
  }
  savingBadge.classList.remove('hidden')
  try {
    const host = 'https://f924fe8787bd.ngrok.io' // → https://api.kinopio.club
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Cache-Control': 'must-revalidate, no-store, no-cache, private'
    })
    const response = await fetch(`${host}/blog/subscribe`, {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers
    })
    if (response.status !== 200) {
      console.error('🚒', response)
      showError()
      return
    }
    const result = await response.json()
    console.log('🍄', response, result)
  } catch (error) {
    console.error('🚒', error)
    showError()
    return
  }
  showSuccess()
}

if (form) {
  form.addEventListener('submit', submitForm)
}

