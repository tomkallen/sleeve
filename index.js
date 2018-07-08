function sleeve (obj, path, fallback) {

  // Fallback is returned if object provided is undefined
  // If fallback is omitted it defaults to 'undefined'
  // Thus 'undefined' is always returned if path does not exist'
  if (!obj || typeof obj !== 'object') {
    return typeof fallback === 'function' ? fallback() : fallback
  }
  if (!path) return obj

  let o = Object.assign({}, obj)
  path = path.split('.')

  // propertyCollector builds itself using properties(keys) one by one.
  // If propertyCollector can not reach the desired destination then
  // fallback is returned or executed
  for (let i = 0; i < path.length; i++) {
    if (!o.hasOwnProperty(path[i])) {
      return typeof fallback === 'function' ? fallback() : fallback
    }

    o = o[path[i]]

    if (o !== Object(o) && i < path.length - 1) {
      return typeof fallback === 'function' ? fallback() : fallback
    }
  }
  return o
}

if (typeof module !== 'undefined' && module.exports) module.exports = sleeve
