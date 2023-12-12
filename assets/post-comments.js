const countElement = document.querySelector('.post-comments-count .comments-string')
const commentsElement = document.querySelector('.post-comments-container aside')
const commentsForm = document.querySelector('.post-comments-container form')

const commentsCountLoader = document.querySelector('.post-comments-count .loader')
const commentsFormLoader = document.querySelector('.post-comments-container form .loader')

let slug = window.location.pathname
slug = slug.replaceAll('/', '')
slug = slug.replaceAll('.html', '')

const apiHost = 'https://kinopio.local:3000' // dev
// const apiHost = 'http://api.kinopio.club' // prod

let isSubmitting

const fetchComments = async () => {
  const url = `${apiHost}/personal-blog/comments/${slug}`
  try {
    const response = await fetch(url)
    const data = await response.json()
    let count = 0
    count = data?.length
    countElement.innerText = `${count || 0} Comments`
    return data
  } catch (error) {
    console.error('🚒 fetchComments', error)
    // showError()
  }
}

const updateLoadersIsVisible = (value) => {
  if (value) {
    commentsCountLoader.classList.remove('hidden')
    commentsFormLoader.classList.remove('hidden')
  } else {
    commentsCountLoader.classList.add('hidden')
    commentsFormLoader.classList.add('hidden')
  }
}

const updateAll = async () => {
  updateLoadersIsVisible(true)
  const comments = await fetchComments()
  updateLoadersIsVisible(false)
  console.log('🐸 comments', comments)
  comments.forEach(comment => {
    // name
    let metaNode = document.createElement('p')
    metaNode.className = 'comment-meta'
    if (comment.website) {
      let websiteNode = document.createElement('a')
      websiteNode.innerText = comment.name
      websiteNode.setAttribute('href', comment.website)
      metaNode.websiteNode = 'comment-meta-name'
      metaNode.appendChild(websiteNode)
    } else {
      let nameNode = document.createElement('span')
      nameNode.innerText = comment.name
      nameNode.websiteNode = 'comment-meta-name'
      metaNode.appendChild(nameNode)
    }
    commentsElement.appendChild(metaNode)
    // time
    let timeNode = document.createElement('span')
    timeNode.className = 'comment-meta-time'
    timeNode.innerText = comment.updatedAtRelative
    if (comment.isNew) {
      let newNode = document.createElement('div')
      newNode.className = 'comment-meta-new'
      newNode.innerText = 'new'
      timeNode.prepend(newNode)
    }
    metaNode.appendChild(timeNode)
    // content
    let contentNode = document.createElement('blockquote')
    contentNode.className = 'comment-content'
    contentNode.innerHTML = comment.contentHTML
    commentsElement.appendChild(contentNode)
  })
}

updateAll()

commentsForm.onsubmit = async (event) => {
  event.preventDefault()
  if (isSubmitting) { return }
  commentsFormLoader.classList.remove('hidden')
  isSubmitting = true
  let body = {}
  let formData = new FormData(commentsForm)
  formData.append('postSlug', slug)
  for (var pair of formData.entries()) {
    const key = pair[0]
    let value = pair[1]
    if (value === 'on') {
      value = true
    }
    body[key] = value
  }

  console.log('💖',body)

  try {
    const url = `${apiHost}/personal-blog/comment/create`
    let response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log('🌍🌍🌍',data)

    // clear form
    // success state (w moderation msg)
  } catch (error) {
    console.error('🚒 commentsForm submit', error)
    // showError()
  }
  updateLoadersIsVisible(false)
  isSubmitting = false
}



// global cache.js
// restore commentPreferences from cache (name, email, ..)
// restore inProgressComment for slug (save on change, clear on submit)

// progressive moderation?

// is awaiting verification??
// is awaiting moderation??


// send emails: new postmark server: blog-comments