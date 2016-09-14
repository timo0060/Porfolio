
 (function(){
   'use strict';
   /**
    * Created by Tim on 9/6/2016.
    */
   angular.module('Portfolio').controller('LoginController', function ($scope, $http, $log, Flash, $state) {
       $log.debug("Login Controller");
       $scope.login = {};

       $scope.checkForm = function(){
           var data = {
               username: $scope.login.username,
               password: $scope.login.password
           };
           $http.post('http://server.timothyradder:443/api/login', data).success(function (data, status) {
               var message = data.message;
               var id = Flash.create(data.flash, message, 3000, {}, true);
               sessionStorage.setItem('_token', JSON.stringify(data._token));
               sessionStorage.setItem('last_logged', JSON.stringify(data.logged_in));
               $state.go('admin', {}, { reload: true });
           }).error(function (error) {
               var message = data.message;
               var id = Flash.create(data.flash, message, 3000, {}, true);
           });
       };

       $scope.clearForm = function(){
           $scope.login = {};
       };
   });
 }());