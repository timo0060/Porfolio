var app = angular.module('Portfolio', ['ngRoute','ui.router', 'ngSanitize', 'ui.bootstrap', 'ui.router.tabs']);
    
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
    })
    .state("login", {
        url: "/adminLogin",
        templateUrl: "res/templates/login.html",
        controller: 'LoginCtrl'
    })
    .state("admin", {
        url: "/adminPortal",
        templateUrl: "res/templates/admin.html",
        controller: 'AdminCtrl'
    })
    .state("newPost", {
        url: "/adminPortal/newPost",
        templateUrl: "res/templates/newPost.html",
        controller: 'NewPostCtrl'
    })
    .state("newPost.code", {
        url: "/code",
        templateUrl: "res/templates/tabs/code.html"
    })
    .state("newPost.preview", {
        url: '/preview',
        templateUrl: "res/templates/tabs/preview.html"
    })
    .state("edit", {
        url: "/adminPortal/edit/:id",
        templateUrl: "res/templates/edit.html",
        controller: 'EditCtrl'
    })
    .state("edit.code", {
        url: '/code',
        templateUrl: "res/templates/tabs/code.html"
    })
    .state("edit.preview", {
        url: '/preview',
        templateUrl: "res/templates/tabs/preview.html"
    });
    
    $urlRouterProvider.when('', '/home');
    
});