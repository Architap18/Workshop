const cache = {};

function cacheGet(req, res, next) {
    let key = req.url;
    let value=cache[key];
    if (value) {
        return res.json(cache[key]);
    }
    res.cacheKey = key;
    next();
}
function save(key, data) {
    cache[key] = data;
}

module.exports = {
    cacheGet,
    save
};