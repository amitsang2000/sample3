/**
 * Created by hai on 24-07-2015.
 */
/**
 * Created by hai on 21-07-2015.
 */
var mongoose            = require('mongoose');
var db = require('../configurations/connections/db.js');


module.exports = {
    _schema: null,

    _schema_def: {

        _id: String,
        email: String,
        name: String
    },
    schema: function(){
        if (!module.exports._schema){
            module.exports._schema = new mongoose.Schema(module.exports._schema_def, { collection: 'employeedetails' });
        }

        return module.exports._schema;
    },



    model: function(new_instance){
        if (!module.exports._model){
            var schema = module.exports.schema();


            mongoose.model('employeedetails', schema);
            module.exports._model = mongoose.model('employeedetails');
        }

        return new_instance ?
            new module.exports._model() :
            module.exports._model;
    }
}