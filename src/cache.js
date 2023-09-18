const {Cache} = require("./caches/Cache");
const {CACHE_OPTIONS} = require("./cache.options");

function cache(func, options={}) {
    options = {...CACHE_OPTIONS, ...options};

    const cache = new options.Cache();

    return function (...props) {
        return cache.retrieveUsing(props[options.key], ()=>func(...props));
    }
}

module.exports =  {cache};