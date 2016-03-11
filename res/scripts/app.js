var app = angular.module('Portfolio', ['ngRoute','ui.router']);
    
app.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider.state('home', {
        url: "/home",
        templateUrl: "res/templates/home.html"
    })
    .state("contact", {
        url: "/contact",
        templateUrl: "res/templates/contact.html"
    });
    
    $urlRouterProvider.when('', '/home');
    
}
          
);