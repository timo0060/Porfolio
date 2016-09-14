(function(){
  'use strict';
  angular.module('Portfolio').run(function ($rootScope, $state, $log, AuthService) {
      $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
        console.log('test');

          if(toState.authenticate){

              AuthService.auth.then(_authSuccess, _authFailure);

              function _authSuccess(res) {
                  if(res.data && !res.data.auth){
                      $state.go("login");
                  }else{
                    $state.go('home');
                  }
              };

              function _authFailure() {
                $state.go('home');
              };
          }else if(toState.login){
              AuthService.auth.then(_authSuccess, _authFailure);

              function _authSuccess(res) {
                  if(res.data && res.data.auth){
                      $state.go("admin");
                  }
              };

              function _authFailure(res) {
                console.error('OOps, something went wrong!');
              };
          }
      });
  })
}())
