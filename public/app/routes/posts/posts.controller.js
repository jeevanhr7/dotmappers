/**
 * Created by ManjeshV on 17/01/16.
 */
mainapp.controller('PostsCtrl', ['$scope','$stateParams', 'postFactory', function ($scope,$stateParams,postFactory) {
    testPosts = postFactory.getPosts()
        console.log('After insert testPosts:',testPosts)
        //$scope.id = postFactory.je;

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

// $scope.name=posts.name;
//// Test cases
//var testPosts = postFactory.getPosts()
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
//var testPostReturnValue = postFactory.setPost(testPostForInsert);
//console.log('testPostReturnValue:',testPostReturnValue)
