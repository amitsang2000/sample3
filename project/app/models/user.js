var mongoose            = require('mongoose');

var db                  = require('../configurations/connections/db.js');

module.exports = {
    _schema: null,

    _schema_def: {
        _id: String
        , name: String
        , email: String
        , username: String
        , password: String
        , image: String
        , aboutMe: String
        , gender: String
        , birthDate: Date
        , phone: String
        , address: String
        , city: String
        , state: String
        , country: String
        , zipcode: String
        , bloodgroup: String
        , speciality: [String]
        , languagesKnown: [String]
        , usertype: String
        //, imageData: String
        , balance: String
        , membership: String
        ,mcinum:String
        ,qualification:String
        , payableConsultations: Number // (# of consultations whose status is 'Closed' for which the doctor has not been paid yet
        ,affliated:String
        ,remark:String
        ,joindate:String
        ,source:String
        ,working_place:String
        , timings:String
        , bankAcctNum:String
        , ifsc_micr:String
        , pancardNum:String
        ,practiseLocation:String
        ,ispublish:Boolean
        ,meta_keyword:String
        ,likes:String
        ,peoples:String
        ,rating:String
        ,totalrating:String
        ,meta_description:String
        ,views:Number
        ,quickconsultation:String
        ,googleplus:String
        ,userFrom:String
        ,premium:Boolean
        ,premimumdoctor:String
        ,display:Number
        ,experience:Number
    },

    schema: function(){
        if (!module.exports._schema){
            module.exports._schema = new mongoose.Schema(module.exports._schema_def, { collection: 'UserInfo' });
        }

        return module.exports._schema;
    },

    _model: null,

    model: function(new_instance){
        if (!module.exports._model){
            var schema = module.exports.schema();



            mongoose.model('UserInfo', schema);
            module.exports._model = mongoose.model('UserInfo');
        }

        return new_instance ?
            new module.exports._model() :
            module.exports._model;
    }
}