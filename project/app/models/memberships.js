var mongoose            = require('mongoose');

var db                  = require('../configurations/connections/db.js');




module.exports = {
    _schema: null,

    _schema_def: {
        _id                 : String
        , user              : {type: String, ref:'UserInfo'}
        , plan              : {type:String, ref:'Plans'}
        , username          : String
        , claimedMembers    : Number
        , created           : Date
        , status            : String
        , message           : String
        ,expire             : Date
        ,amountPaid         : String
        ,noOfConsultations  : Number
        ,specialityConsultations:Number
        ,familyConsultations:Number
    },

    schema: function(){
        if (!module.exports._schema){
            module.exports._schema = new mongoose.Schema(module.exports._schema_def, { collection: 'Memberships' });
        }
        return module.exports._schema;
    },

    _model: null,

    model: function(new_instance){
        if (!module.exports._model){
            var schema = module.exports.schema();
            //   console.log('schema for users');
            //   console.log(schema);


            mongoose.model('memberships', schema);
            module.exports._model = mongoose.model('memberships');
        }

        return new_instance ?
            new module.exports._model() :
            module.exports._model;
    }
}


