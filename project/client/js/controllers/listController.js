/**
 * Created by hai on 21-07-2015.
 */

var myApp = angular.module('myApp', []);
myApp.controller('myctrlr', function($scope, $http) {


    $http.get("http://localhost:1009/Listcontacts")
        .success(function(response) {
            alert('jjjjjjjjjj');
            $scope.data = response;

        });

    $scope.save=function(user){


        alert(JSON.stringify(user));
        $http.post("http://localhost:1009/newData",user)
            .success(function(response) {
                alert(JSON.stringify(user));
                $scope.data = response;

            });
    }

});