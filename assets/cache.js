const cacheStoreLocal = (key, value) => {
  try {
    // console.log('🏬 cacheStoreLocal', key, value)
    window.localStorage.setItem(key, value)
  } catch (error) {
    console.error('🚒 cacheStoreLocal could not save to localStorage', { key, value, valueType: typeof value }, error)
  }
}
const cacheGetLocal = (key) => {
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
