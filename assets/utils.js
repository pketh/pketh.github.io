const pluralize = (word, condition) => {
  if (condition || condition === 0) {
    word = word + 's'
  }
  return word
}