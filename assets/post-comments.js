const countElement = document.querySelector('.post-comments-count .comments-string')
const commentsElement = document.querySelector('.post-comments-container aside')

const commentsForm = document.querySelector('.post-comments-container form')
const commentsFormName = document.querySelector('.post-comments-container form input[name="name"')
const commentsFormEmail = document.querySelector('.post-comments-container form input[name="email"')
const commentsFormWebsite = document.querySelector('.post-comments-container form input[name="website"')
const commentsFormContent = document.querySelector('.post-comments-container form textarea[name="content"')
const commentsFormShouldNotify = document.querySelector('.post-comments-container input[name="shouldEmailNotifications"')

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

const stringToBoolean = (string) => {
  if (string === 'false' || !string) {
    return false
  } else {
    return true
  }
}

const fetchComments = async () => {
  const url = `${apiHost}/personal-blog/comment/${slug}`
  try {
    const response = await fetch(url)
    const data = await response.json()
    let count = 0
    count = data?.length
    countElement.innerText = `${count || 0} Comments`
    return data
  } catch (error) {
    console.error('🚒 fetchComments', error)
    showCommentsError()
    hideCommentsForm()
  }
}

// add comment

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
    body[key] = value
  }
  body.shouldEmailNotifications = commentsFormShouldNotify.checked
  console.log('💐 comment body', body)
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
    if (response.status !== 200) {
      throw { data }
    }
    console.log('🌍 added comment',data, data.isModerated, data.kinopioUserId, data.isModerator)
    updateCommenterCache(body)
    clearCacheCommentContent(slug)
    hideCommentsForm()
    if (data.isModerated) {
      updateComments()
      showCommentsSuccess('Comment added ( ^o^)ノ')
    } else {
      showCommentsSuccess()
    }
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
  if (message) {
    const badge = commentsSuccessBadge.querySelector('.badge')
    badge.innerText = message
  }
}
const hideCommentsForm = () => {
  commentsForm.classList.add('hidden')
}
const hideCommentsError = () => {
  commentsErrorBadge.classList.add('hidden')
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




// increase size of text area while typing (carddetails)

// server moderation emails
// send emails: new postmark server: blog-comments


// update kinopio promo img
// add hover logo states




// cache


const commenterFromCache = () => {
  let body = {
    name: cacheGetLocal('name'),
    email: cacheGetLocal('email'),
    website: cacheGetLocal('website'),
    shouldEmailNotifications: cacheGetLocal('shouldEmailNotifications'),
  }
  return body
}
const updateCommenterCache = (body) => {
  cacheStoreLocal('name', body.name)
  cacheStoreLocal('email', body.email)
  cacheStoreLocal('website', body.website)
  cacheStoreLocal('shouldEmailNotifications', body.shouldEmailNotifications)
}

commentsFormContent.addEventListener('input', () => {
  updateContentCache(slug, commentsFormContent.value)
})
const updateContentCache = (slug, content) => {
  cacheStoreLocal(`post-${slug}`, content)
}
const commentContentFromCache = (slug) => {
  return cacheGetLocal(`post-${slug}`)
}
const clearCacheCommentContent = (slug) => {
  removeLocal(`post-${slug}`)
}

// init

const updateComments = async () => {
  updateLoadersIsVisible(true)
  const comments = await fetchComments()
  updateLoadersIsVisible(false)
  console.log('🐸 comments', comments)
  commentsElement.innerHTML = ''
  comments.forEach(comment => {
    let metaNode = document.createElement('p')
    let infoNode
    metaNode.className = 'comment-meta'

    // name
    if (comment.website) {
      infoNode = document.createElement('a')
      infoNode.innerText = comment.name
      infoNode.setAttribute('href', comment.website)
      infoNode.className = 'comment-meta-name'
      metaNode.appendChild(infoNode)
    } else {
      let node = document.createElement('span')
      node.innerText = comment.name
      node.className = 'comment-meta-name'
      metaNode.appendChild(node)
    }
    commentsElement.appendChild(metaNode)
    // badges
    let badgesNode = document.createElement('span')
    badgesNode.className = 'comment-meta-badges'
    metaNode.appendChild(badgesNode)
    // time badge
    let timeNode = document.createElement('div')
    timeNode.className = 'comment-meta-badge'
    timeNode.classList.add('comment-time-badge')
    timeNode.innerText = `${comment.createdAtRelative}`
    if (comment.isNew) {
      timeNode.classList.add('comment-new-badge')
      timeNode.setAttribute('title', 'Recently posted')
    }
    badgesNode.prepend(timeNode)
    // kinopio user badge
    if (comment.kinopioUser) {
      let node = document.createElement('div')
      node.className = 'comment-meta-badge'
      node.classList.add('comment-kinopio-badge')
      node.innerText = 'Kinopio User'
      node.style.background = comment.kinopioUser.color
      badgesNode.prepend(node)
    }
    // moderator badge
    if (comment.isModerator) {
      let node = document.createElement('div')
      node.className = 'comment-meta-badge'
      node.innerText = 'Author'
      node.setAttribute('title', 'Article Author')
      badgesNode.prepend(node)
    }
    metaNode.appendChild(badgesNode)
    // content
    let contentNode = document.createElement('blockquote')
    contentNode.className = 'comment-content'
    contentNode.innerHTML = comment.contentHTML
    commentsElement.appendChild(contentNode)
  })
}

const updateFormDefaults = () => {
  const commenter = commenterFromCache()
  const content = commentContentFromCache(slug)
  commentsFormName.value = commenter.name || ''
  commentsFormEmail.value = commenter.email || ''
  commentsFormWebsite.value = commenter.website || ''
  commentsFormContent.value = content || ''
  commentsFormShouldNotify.checked = stringToBoolean(commenter.shouldEmailNotifications)
}

updateComments()
updateFormDefaults()
