(function(){
  'use strict';
  angular.module('Portfolio')
    .factory('AuthService', function ($http, $state, $log, GetToken, $q) {
      /**
       * @class AuthService
       */
      function _checkAuthentication(){
          var deferred = $q.defer();
          _fetchToken(deferred);
          return deferred.promise;
      }

      function _fetchToken(deferred){
        $http.post('http://server.timothyradder:443/api/auth', GetToken.getToken)
          .then(_fetchSuccess(deferred), _fetchFailure(deferred));
      }

      /**
       * Called on token fetch success
       * @method _fetchSuccess
       * @private
       * @param {Object} deferred Deferred promise object
       */
      function _fetchSuccess(deferred){
        return function(response){
          // deal with token here
          deferred.resolve(/* Data can be returned here*/ );
        }
      }

      function _fetchFailure(deferred){
        return function(response){
          // deal with errored request here
          deferred.reject(/* specify what went wrong here */);
        }
      }

      return {
          auth : _checkAuthentication()
      }
  });
}());
