/**
 * Created by admin on 04-12-2014.
 */
var mongoose            = require('mongoose');

var db                  = require('../configurations/connections/db.js');

module.exports = {
    _schema: null,

    _schema_def: {
        _id                 : String
        , PlanName          : String
        , Description       : [String]
        , Duration          : Number
        , SpecialistAccess  : String
        , GeneralAccess     : String
        , Members           : Number
        , Diagnostics       : String
        , Amount            : Number
        , Recharge          : String
        , noOfConsultations : Number
        ,specialityConsultations:Number
       , familyConsultations:Number
        ,upgrade            : [
                                {
                                    planid  : String,
                                    status  : String
                                }
                              ]
    },

    schema: function(){
        if (!module.exports._schema){
            module.exports._schema = new mongoose.Schema(module.exports._schema_def, { collection: 'Plans' });
        }
        return module.exports._schema;
    },

    _model: null,

    model: function(new_instance){
        if (!module.exports._model){
            var schema = module.exports.schema();
            //   console.log('schema for users');
            //   console.log(schema);


            mongoose.model('Plans', schema);
            module.exports._model = mongoose.model('Plans');
        }

        return new_instance ?
            new module.exports._model() :
            module.exports._model;
    }
}
