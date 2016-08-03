var app = angular.module('Portfolio', ['ngRoute','ui.router', 'ngSanitize']);
    
app.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider.state('home', {
        url: "/home",
        templateUrl: "res/templates/home.html"
    })
    .state("contact", {
        url: "/contact",
        templateUrl: "res/templates/contact.html",
        controller: 'ContactCtrl as contact'
    })
    .state("blog", {
        url: "/blog",
        templateUrl: "res/templates/blog.html",
        controller: 'BlogCtrl as blog'
    })
    .state("post", {
        url: "/blog/:id",
        templateUrl: "res/templates/post.html",
        controller: 'PostCtrl as post'
    });
    
    $urlRouterProvider.when('', '/home');
    
});