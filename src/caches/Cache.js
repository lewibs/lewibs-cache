const {CacheEntry} = require("./CacheEntry");

class Cache extends Map {
    constructor() {
        super();
    }

    set(id, value) {
        const entry = new CacheEntry(id, value);
        return super.set(id, entry);
    }

    retrieveUsing(id, retriever) {
        let res = this.get(id);

        if (!res) {
            res = retriever();
            this.set(id, res);
        } else {
            res = res.use();
        }

        return res;
    }
}

module.exports = {Cache};