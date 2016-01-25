/**
 * Created by ManjeshV on 17/01/16.
 */

// routing for objects
mainapp.config(['$stateProvider',
    function ($stateProvider) {
        $stateProvider.state('objects', {
            url: '/objects',
            templateUrl: '/objects.html',
            controller: 'ObjectsCtrl'
        });

    }]);
