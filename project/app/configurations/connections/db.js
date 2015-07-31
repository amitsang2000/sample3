var mongoose = require('mongoose');
require('../dev');

module.exports = {
    _db: null,

    init: function(){
        if (!module.exports._db){
            var path = 'mongodb://' + MONGO_SERVER_NAME + '/' + MONGO_DB_NAME;
            console.log('connecting to MONGO via ' + path);
            module.exports._db = mongoose.connect(path);
        }
        return module.exports._db;
    }

}
