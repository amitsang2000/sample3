/**
 * Created by hai on 21-07-2015.
 */
var Listcontacts = require('../models/dataModel.js');
var newData = require('../models/dataModel.js');
var bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();


//var exp = require('express');
var app = express();

exports.getAll = function(req, res)
{
    var data1 = Listcontacts.model(false);
    data1.find({}, function(err, result)
        {
            if(err)
                res.send("error is came");
            else
            {

                res.send(result);

            }

        })
};


    exports.save = function(req, res)
    {

        var data1 = newData.model(true);

        var ObjectId              = require('mongoose').Types.ObjectId;
        data1._id              = new ObjectId();

        data1.name = req.body.name;
        data1.designation = req.body.designation;


        data1.save(function(err, result)

        {

            if(err)
                res.send(err);
            else
            {

                res.send(result);
            }

        })
};
