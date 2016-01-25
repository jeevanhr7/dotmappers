/**
 * Created by ManjeshV on 17/01/16.
 */

// routing for posts
mainapp.config(['$stateProvider',
    function ($stateProvider) {
        $stateProvider.state('posts', {
            url: '/posts/{id}',
            templateUrl: '/posts.html',
            controller: 'PostsCtrl'
        });

    }]);
