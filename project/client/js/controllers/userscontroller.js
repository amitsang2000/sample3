/**
 * Created by hai on 27-07-2015.
 */
/**
 * Created by hai on 21-07-2015.
 */


var myApp = angular.module('myApp', []);

myApp.controller('myctrlr', function($scope, $http) {
    $scope.data=[];

    $http.get("http://localhost:1009/api/users")
        .success(function (response) {
            //  $scope.data = response;

            for(var i=0;i<response.length;i++)

            {

                for(var j=0;j<response[i].length;j++){
                    $scope.data.push(response[i][j]);

                }
            }

        });

});