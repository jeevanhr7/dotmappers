/**
 * Created by Jeevan HR on 17/01/16.
 */
mainapp.factory('objectFactory', ['$http','$q','APP_CONFIG',function ($http,$q,APP_CONFIG) {

    var dataFactory, urlBase;
    urlBase = APP_CONFIG.baseApiUrl + "/objects";
    dataFactory = {};
    dataFactory.getObjects = function() { // B.
        var deferred;
        // 1.Creating a promise object
        deferred = $q.defer(); // this is a promise -> Popular libraries for promises are Q, Async, Bluebird
        // Promise always have a then() method
        $http({ // C. Ajax Call
            method: "GET",
            url: urlBase
        }).success(function(data, status, headers, config) { // D. On Success
            // 4. Promise resolved on success - goes  to then()
            return deferred.resolve(data); // E. Promise Resolved and then() called | While resolving i gave one arguement
        }).error(function(data, status) {
            // 4. Promise rejected on failure - goes to catch()
            return deferred.reject(err);
        });
        // 2. Returning a promise to calling function
        return deferred.promise;
    };



    dataFactory.setPost = function(object){
        if(object){
           objectFactory.objects.push(object);
            return "setPost:success"
        } else {
            alert("Post is blank")
            return "setPost:fail"
        }
    }
    return dataFactory;
}]);