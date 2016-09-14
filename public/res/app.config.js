(function(){
  'use strict';

  angular.module('Portfolio').config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider.state('home',{
          url: '/',
          templateUrl: 'res/templates/home.html',
          controller: 'HomeController as HomeCtrl',
          authenticate: false,
          login: false
      }).state('admin', {
          url: '/admin',
          templateUrl: 'res/templates/admin.html',
          controller: 'AdminController as AdminCtrl',
          authenticate: true,
          login: false
      });
  })
}())
