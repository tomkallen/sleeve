function sleeve(obj, path, fallback = null) {
    let _ = obj;
    path = path.split(".");
    for (let key of path) {
        if (typeof _[key] !== "undefined") {
            _ = _[key];
        } else {
            return typeof fallback === "function" ? fallback() : fallback;
        }
    }
    return _;
};

module.exports = sleeve;
