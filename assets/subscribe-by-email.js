const forms = document.querySelectorAll('.subscribe-by-email-form')

let savingBadge, successBadge, errorBadge, resultDescription

const clearAll = () => {
  savingBadge.classList.add('hidden')
  successBadge.classList.add('hidden')
  errorBadge.classList.add('hidden')
  resultDescription.classList.add('hidden')
}

const showSuccess = () => {
  clearAll()
  titles = document.querySelectorAll('.subscribe-by-email-title')
  titles.forEach(title => {
    title.classList.add('hidden')
  })
  forms.forEach(form => {
    form.classList.add('hidden')
  })
  successBadge.classList.remove('hidden')
  showDescription("( ´ ▽ ` )ﾉ \nThanks, I just sent you a welcome email! \n(check your spam folder if you don't see it)")
}

const showError = (message) => {
  message = message || '(シ_ _)シ \nSomething went wrong, please refresh and try again'
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
  const form = event.target.parentNode
  savingBadge = form.querySelector('.saving-badge')
  successBadge = form.querySelector('.success-badge')
  errorBadge = form.querySelector('.error-badge')
  resultDescription = form.querySelector('.result-description')
  clearAll()
  if (!email) {
    showError('Email address is missing')
    return
  }
  savingBadge.classList.remove('hidden')
  try {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Cache-Control': 'must-revalidate, no-store, no-cache, private',
      'Access-Control-Allow-Origin': '*'
    })
    const response = await fetch(`${apiHost}/personal-blog/new-post/subscribe`, {
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

if (forms) {
  forms.forEach(form => {
    form.addEventListener('submit', submitForm)
  })
}
