const storeLocal = (key, value) => {
  try {
    console.log('🏬 storeLocal', key, value)
    window.localStorage.setItem(key, value)
  } catch (error) {
    console.error('🚒 storeLocal could not save to localStorage', { key, value, valueType: typeof value }, error)
  }
}
const getLocal = (key) => {
  try {
    return window.localStorage[key]
  } catch (error) {}
}
const removeLocal = (key) => {
  try {
    window.localStorage.removeItem(key)
  } catch (error) {
    console.warn('removeLocal', error)
  }
}

// comments

const cacheCommenter = () => {
  let body = {
    name: getLocal('name'),
    email: getLocal('email'),
    website: getLocal('website')
  }
  return body
}
const cacheUpdateCommenter = (body) => {
  storeLocal('name', body.name)
  storeLocal('email', body.email)
  storeLocal('website', body.website)
}
// content
const cacheUpdateCommentContent = (slug, content) => {
  storeLocal(`post-${slug}`, content)
}
const cacheCommentContent = (slug) => {
  return getLocal(`post-${slug}`)
}
const cacheClearCommentContent = (slug) => {
  removeLocal(`post-${slug}`)
}
