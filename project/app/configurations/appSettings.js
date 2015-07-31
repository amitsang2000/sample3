/**
 * Created by hai on 01-12-2014.
 */
var express         = require('express');
var path            = require("path");
var bodyParser      = require('body-parser');

module.exports = {

    init: function (app) {


      // CORS (Cross Origin Resource Sharing) Implementation

        var allowCrossDomain = function(req, res, next) {
            res.header('Access-Control-Allow-Origin', "*");
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
            next();
        }


        //app.use(paginate.middleware(10, 500));
        app.use(express.static(path.join(__dirname, '../../client/')));
        //app.use(allowCrossDomain);
        app.use(bodyParser.urlencoded({ extended: true })) // parse application/x-www-form-urlencoded
        app.use(bodyParser.json()) // parse application/json





        // Set the routes
        this.setRoutes(app);


        // Set up the port
        app.set('port', process.env.PORT || PORT);
    },

    setRoutes: function (app) {
        require('../routes/list')(app);
    }


}

