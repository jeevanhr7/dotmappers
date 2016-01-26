'use strict';

mainapp.controller('HomeCtrl', ['$scope', 'objectFactory', function ($scope, objectFactory) {

    var promise = objectFactory.getObjects()

        promise.then(function(response){

        console.log("objects fetcted successfully from objectFactory -> $http -> XMLHTTPRequest -> Nodejs -> Express ->Mongo",response)
        $scope.objects = response.objects

    })

}]);

