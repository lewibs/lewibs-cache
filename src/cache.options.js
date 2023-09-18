const {Cache} = require("./caches/Cache");

const CACHE_OPTIONS = {
    key: 0,
    Cache: Cache,
}

Object.freeze(CACHE_OPTIONS);
module.exports = {CACHE_OPTIONS};