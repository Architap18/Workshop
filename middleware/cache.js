const cache = {};

function cacheGet(req, res, next) {
    let key = req.url;
    let value = cache[key];

    if (value) {
        const age = Date.now() - value.time;

        if (age < 60000) {
            res.set('X-Cache', 'HIT');
            return res.json(value.data);
        }

        delete cache[key];
    }

    res.set('X-Cache', 'MISS');
    next();
}
function save(key, data) {
    cache[key] = {
    data: data,
    time: Date.now()
};;
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