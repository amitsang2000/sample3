// Load Configurations
require('./configurations/dev');

// Include required files
//var express         = require('express');
var http            = require('http');

var db              = require('./configurations/connections/db.js');

// init app
//var app             = express();

// connect to db
var mongoDB         = db.init();
var exp = require('express');
var app             = exp();

var path = require('path');

var model = require('./models/dataModel.js');
var bodyparser = require('body-parser');
var amitlist = require('./routes/list1.js');
var list2 = require('./controllers/Listdetails.js');

app.use('/', amitlist);




app.use(exp.static(path.join(__dirname,'../client/')));
app.use(bodyparser.urlencoded({ extended:true }))
app.use(bodyparser.json());








app.post('/newData',list2.save);


// init app
require('./configurations/appSettings').init(app);

// create server
var server          = http.createServer(app);
server.listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});








