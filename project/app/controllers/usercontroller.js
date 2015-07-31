/**
 * Created by hai on 27-07-2015.
 */
var Data1 = require('../models/plans.js');
var Data2 = require('../models/memberships.js');
var Data3 = require('../models/user.js');


exports.getUserData = function(req, res)
{ console.log("codddn");
    var dataone     = Data1.model(false);
    var datatwo     = Data2.model(false);
    var datathree   = Data3.model(false);
    var finalData   =[];



    datatwo.find({plan:'5287488b197dcdb803000002'}, function(err, item){
        console.log("con");
        if(err)
        {
            console.log(err);
        }
        else {
            console.log(item[0])
            for (var i = 0; i<item.length; i++)
            {
                datathree.find({_id: item[i].user}, function(error, list)
                {
                    if(error)
                        console.log(error);
                    else
                    {


                        //list.push({division: "HAT"});  //for division

                        finalData.push(list);
                        //list.push({division: 'HAT'});

                        if(item.length == finalData.length)
                        {
                            res.send(finalData);
                        }

                    }


                })


            }

        }
    })

};