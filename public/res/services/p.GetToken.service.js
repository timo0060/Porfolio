(function(){
  'use strict';

  angular.module('Portfolio')
    .service('GetToken', function(){
        this.getToken = function(){
            var data = {
                _token: JSON.parse(sessionStorage.getItem("_token"))
            };
            return data;
        }
    });
}());
