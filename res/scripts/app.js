var app = angular.module('Portfolio', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
    
    $routeProvider
    .when('/', {
        controller: 'homeCtrl',
        templateUrl: 'res/templates/home.html'
    }).when('/contact', {
        controller: 'contactCtrl',
        templateUrl: 'res/templates/contact.html'
    }).otherwise({
        redirectTo: '/'
    });
    
});