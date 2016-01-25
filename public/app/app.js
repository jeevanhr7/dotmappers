

var mainapp = angular.module('mainApp', ['ui.router']);


// Main config
mainapp.config([ '$urlRouterProvider',
    function ( $urlRouterProvider) {
        $urlRouterProvider.otherwise('home');
    }
]);








