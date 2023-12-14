const countElement = document.querySelector('.post-comments-count .comments-string')
const commentsElement = document.querySelector('.post-comments-container aside')

const commentsForm = document.querySelector('.post-comments-container form')
const commentsFormName = document.querySelector('.post-comments-container form input[name="name"')
const commentsFormEmail = document.querySelector('.post-comments-container form input[name="email"')
const commentsFormWebsite = document.querySelector('.post-comments-container form input[name="website"')
const commentsFormContent = document.querySelector('.post-comments-container form textarea[name="content"')

const commentsCountLoader = document.querySelector('.post-comments-count .loader')
const commentsFormLoader = document.querySelector('.post-comments-container form .loader')

const commentsSuccessBadge = document.querySelector('.post-comments-container .comment-success-badge')
const commentsErrorBadge = document.querySelector('.post-comments-container .comment-error-badge')

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

const updateFormFromCache = () => {
  const commenter = cacheCommenter()
  const content = cacheCommentContent(slug)
  commentsFormName.value = commenter.name
  commentsFormEmail.value = commenter.email
  commentsFormWebsite.value = commenter.website
  commentsFormContent.value = content || ''
  console.log(content, slug, commentsFormContent.value)
}

commentsFormContent.addEventListener('input', () => {
  cacheUpdateCommentContent(slug, commentsFormContent.value)
})

commentsForm.onsubmit = async (event) => {
  event.preventDefault()
  if (isSubmitting) { return }
  hideCommentsError()
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
    console.log('🌍 added comment',data)
    cacheUpdateCommenter(body)
    cacheClearCommentContent(slug)
    hideCommentsForm()
    // if ..
      // updateAll()
      // showCommentsSuccess() // TODO optional take msg, based on if user already passed moderation
    // else ..
      showCommentsSuccess() // msg: "Comment added and awaiting moderation. Thanks!" after being approved, you won't need to wait for moderation the next time you post
  } catch (error) {
    console.error('🚒 commentsForm submit', error)
    showCommentsError()
  }
  updateLoadersIsVisible(false)
  isSubmitting = false
}

// toggle views

const showCommentsError = () => {
  commentsErrorBadge.classList.remove('hidden')
}
const showCommentsSuccess = (message) => {
  hideCommentsError()
  commentsSuccessBadge.classList.remove('hidden')
  // if (message) {
    // TODO commentsSuccessBadge.innerText = message
  // }
}
const hideCommentsForm = () => {
  commentsForm.classList.add('hidden')
}
const hideCommentsError = () => {
  commentsErrorBadge.classList.add('hidden')
}


// send emails: new postmark server: blog-comments
// moderation
  // is awaiting moderation
// notifications to users

// style comment content: with blockquotre, code, img



// update kinopio promo img
// add hover logo states



updateAll()
updateFormFromCache()
