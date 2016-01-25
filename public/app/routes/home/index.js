/**
 * Created by Jeevan HR on 17/01/16.
 */

// routing for home
mainapp.config(['$stateProvider',
    function ($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: '/home.html',
            controller: 'HomeCtrl'
        });
    }
]);
