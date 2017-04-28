function sleeve(obj, path, fallback = null) {

  // Fallback is returned if object provided is undefined
  // If fallback is omitted it defaults to 'null'
  // Thus 'null' is always returned if 'obj' is 'falsy'
  if (!obj) {
    return typeof fallback === "function" ? fallback() : fallback;
  }
  if (!path) {
    return obj;
  }
  let propertyCollector = obj;
  path = path.split(".");

  // propertyCollector builds itself using properties(keys) one by one.
  // If propertyCollector can not reach the desired destination then
  // fallback is returned or executed
  for (let property of path) {
    if (typeof propertyCollector[property] !== "undefined") {
      propertyCollector = propertyCollector[property];
    } else {
      return typeof fallback === "function" ? fallback() : fallback;
    }
  }
  return propertyCollector;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = sleeve;
}
