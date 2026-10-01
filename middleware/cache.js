const cache = {};

function cacheGet(req, res, next) {
    let key = req.url;
    let value=cache[key];
    if (value) {
        res.set('X-Cache', 'HIT');
        return res.json(cache[key]);
    }
    res.set('X-Cache', 'MISS');
    res.cacheKey = key;
    next();
}
function save(key, data) {
    cache[key] = data;
}

function clear() {
    for (const key in cache) {
        delete cache[key];
    }
}

module.exports = {
    cacheGet,
    save,
    clear
};