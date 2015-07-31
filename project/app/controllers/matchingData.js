
var Data1 = require('../models/employeeModel.js');
var Data2 = require('../models/employeedetailsModel.js');


exports.getData = function(req, res)
{
    var dataone = Data1.model(false);
    var datatwo = Data2.model(false);
    var finalData = [];




    dataone.find({division:"HAT"}, function(err, item){
         if(err)
        {
            console.log(err);
        }
        else {

          for (var i = 0; i<item.length; i++)
          {

              datatwo.find({email: item[i].email}, function (error, list)
              {
                  if (error)

                      console.log(error);

                  else
                    {





                         finalData.push(list);



                     // list.push({division: 'HAT'});for division


                      if (item.length == finalData.length)
                      {
                          res.send(finalData);
                      }

                  }


              })


          }

            }
    })

};
