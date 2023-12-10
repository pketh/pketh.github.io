const countElement = document.querySelector('.post-comments-count')
const comments = document.querySelector('.post-comments-details aside')

let slug = window.location.pathname
slug = slug.replaceAll('/', '')
slug = slug.replaceAll('.html', '')

const apiHost = "https://kinopio.local:3000"
// const apiHost = "http://api.kinopio.club"

const fetchComments = async () => {
  const url = `${apiHost}/personal-blog/comments/${slug}`

  try {

    const response = await fetch(url)
    const data = await response.json()
    let count = 0
    count = data?.length
    countElement.innerText = `${count || 0} Comments`


    console.log('🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸', comments, summary, slug, data, count)


  } catch (error) {
    console.error('🚒 fetchComments', error)
    // showError()
  }
}

fetchComments()