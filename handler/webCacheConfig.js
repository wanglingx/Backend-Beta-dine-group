const NodeCache = require('node-cache');
const myCache = new NodeCache({ stdTTL: 100, checkperiod: 120 })

class Webcache{
    webCachehadler = ( uniqueKey , response ) => {
        if (myCache.has(uniqueKey)) {
            console.log('Retrieved value from cache');
            return myCache.get(uniqueKey)
        }
        else {
            myCache.set(uniqueKey, response);
            console.log('Value not present in cache,'
                + ' performing computation')
            return response
        }
    }
}

module.exports = {
    Webcache
}
