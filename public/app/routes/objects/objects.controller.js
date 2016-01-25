/**
 * Created by ManjeshV on 17/01/16.
 */
mainapp.controller('ObjectsCtrl', ['$scope','$stateParams', 'objectFactory', function ($scope,$stateParams,objectFactory) {

        // 3. In Synchronous execution value returns, aync execution we return promise and resolve data with then()
        promiseReturnedHere = objectFactory.getObjects().then(function(response){ // A. Execution started HERE
            // 5. Data returned to here //F. Reached to then()
            console.log("objects fetcted successfully from objectFactory -> $http -> XMLHTTPRequest -> Nodejs -> Express ->Mongo",response)
            $scoe.objects = response.objects

        }).catch(function(err){

        })
        console.log('After insert testPosts:',testPosts)
        //$scope.id = objectFactory.je;

    $scope.currentPostID = $stateParams.id;

    $scope.postFactory = postFactory;



    }]
);

//$scope.addComment = function(){
//    if($scope.body === '') { return; }
//    $scope.post.comments.push({
//        body: $scope.body,
//        author: 'user',
//        upvotes: 0
//    });
//    $scope.body = '';
//};

// $scope.name=objects.name;
//// Test cases
//var testPosts = objectFactory.getPosts()
//console.log('testPosts:',testPosts)
//
//var testPostForInsert = {
//    title: "SSIT Blasted",
//    link: "http://ssit.edu.in",
//    upvotes: 0,
//    comments: [
//        {author: 'Joe', body: 'Cool post!', upvotes: 0},
//        {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
//    ]
//}
//
//var testPostReturnValue = objectFactory.setPost(testPostForInsert);
//console.log('testPostReturnValue:',testPostReturnValue)
