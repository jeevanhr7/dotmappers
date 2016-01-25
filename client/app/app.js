

var mainapp = angular.module('mainApp', ['ui.router']);


// Main config
mainapp
    .config([ '$urlRouterProvider',
    function ( $urlRouterProvider) {
        $urlRouterProvider.otherwise('home');
    }
])
    .constant("APP_CONFIG", {
        baseApiUrl: "/api" // added prefix |  Blank when same project "http://other-domain.com" when u know absolute url
    });








