/**
 * Created by hai on 21-07-2015.
 */

var exp = require('express');
var path = require('path');
var app = exp();
var http = require('http');
var db = require('../configurations/connections/db.js');
var bodyParser = require('body-parser');
var router = exp.Router();
var list2 = require('../controllers/Listdetails.js');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next();

});
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});


var api = exp.Router();

module.exports = (function() {



//    api.get('/see',function(req,res){
//        console.log('my Name is ....................');
//        res.send("my Name is ....................");
//    });
    app.use('/newData', router);
    api.get('/Listcontacts',list2.getAll);


    return api;
})();


