const countElement = document.querySelector('.post-comments-count .comments-string')
const commentsElement = document.querySelector('.post-comments-container aside')
const commentsForm = document.querySelector('.post-comments-container form')
const commentsLoader = document.querySelector('.post-comments-container form .loader')

let slug = window.location.pathname
slug = slug.replaceAll('/', '')
slug = slug.replaceAll('.html', '')

const apiHost = "https://kinopio.local:3000" // dev
// const apiHost = "http://api.kinopio.club" // prod

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

const updateAll = async () => {
  // TODO isLoading BOOL toggle hidden class on .loader
  const comments = await fetchComments()
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
  const formData = new FormData(commentsForm)

  for (var pair of formData.entries())
  {
   console.log('🌺🌺🌺🌺🌺',pair[0]+ ': '+ pair[1]);
  }

  try {

  } catch (error) {

  }

  // let response = await fetch('/article/formdata/post/user', {
  //   method: 'POST',
  //   body: new FormData(formElem)
  // });

  // let result = await response.json();

  // console.log('🌍🌍🌍',result.message);

}

// const create = async (event) => {
  // event.preventDefault()
// }

// console.log(commentsForm)
// commentsForm.addEventListener('click', create)


// restore commentPreferences from cache (name, email, ..)
// restore inProgressComment for slug (save on change, clear on submit)