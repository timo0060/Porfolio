(function(){
  'use strict';
  angular.module('Portfolio')
    .config(function($stateProvider){
      $stateProvider.state('login', {
          url: '/login',
          templateUrl: 'res/login/p.login.template.html',
          controller: 'LoginController as LoginCtrl',
          authenticate: false,
          login: true
      });
    });
}());
