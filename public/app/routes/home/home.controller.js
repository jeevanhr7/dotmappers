/**
 * Created by Jeevan H R on 17/01/16.
 */
'use strict';

mainapp.controller('HomeCtrl', ['$scope', 'postFactory', function ($scope, postFactory) {
    $scope.postFactory = postFactory;

    $scope.addPost = function () {
        if (!$scope.title || $scope.title === '') {
            return;
        }

        var currentPostToInsert = {
            title: $scope.title,
            link: $scope.link,
            upvotes: 0,
            comments: [
                {author: 'Joe', body: 'Cool post!', upvotes: 0},
                {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
            ]
        };
        postFactory.setPost(currentPostToInsert);

        $scope.title='';
        $scope.link='';
    };

    $scope.incrementUpvotes = function (post) {
        post.upvotes += 1;
    };

}]);

//$scope.posts = [
//    {title: 'post 1', upvotes: 5},
//    {title: 'post 2', upvotes: 2},
//    {title: 'post 3', upvotes: 15},
//    {title: 'post 4', upvotes: 9},
//    {title: 'post 5', upvotes: 4}
//];