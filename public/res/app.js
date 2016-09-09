/**
 * Created by Tim on 9/6/2016.
 */
var app = angular.module('Portfolio', ['ui.router', 'ngSanitize', 'ngFlash'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home',{
            url: '/',
            templateUrl: 'res/templates/home.html',
            controller: 'HomeController as HomeCtrl'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'res/templates/login.html',
            controller: 'LoginController as LoginCtrl'
        });
    });