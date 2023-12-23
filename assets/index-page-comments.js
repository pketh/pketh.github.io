const fetchComments = async () => {
  const url = `${apiHost}/personal-blog/comment/count`
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.error('🚒 fetchComments', error)
  }
}

const updateComments = async () => {
  const comments = await fetchComments()
  console.log('🐸 comments', comments)
  comments.forEach(comment => {
    const element = document.querySelector(`a.post-comments-link[data-post-slug='${comment.postSlug}']`)
    if (!element) { return }
    element.innerText = `${comment.count} ${pluralize('Comment', comment.count)}`
  })
}

updateComments()
