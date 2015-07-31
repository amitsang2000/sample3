
var sampleData       = require('../controllers/matchingData');
var plansData        = require('../controllers/usercontroller')
module.exports = function (app) {



    app.get("/api/list", sampleData.getData);
    app.get("/api/users",plansData.getUserData);




}