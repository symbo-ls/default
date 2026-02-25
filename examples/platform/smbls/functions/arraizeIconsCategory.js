export const arraizeIconsCategory = function arraizeIconsCategory (library, searchTerm) {
  return (() => {
    const list = Object.keys(library)
    if (searchTerm) {
      return list.filter(value => value.includes(searchTerm))
    }
    return list
  })().map(key => ({
    key,
    value: library[key]
  }))
}
