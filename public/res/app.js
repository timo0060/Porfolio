/**
 * Created by Tim on 9/6/2016.
 */
angular.module('Portfolio', ['ui.router', 'ngSanitize', 'ngFlash'])
.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home',{
        url: '/',
        templateUrl: 'res/templates/home.html',
        controller: 'HomeController as HomeCtrl',
        authenticate: false,
        login: false
    }).state('login', {
        url: '/login',
        templateUrl: 'res/templates/login.html',
        controller: 'LoginController as LoginCtrl',
        authenticate: false,
        login: true
    }).state('admin', {
        url: '/admin',
        templateUrl: 'res/templates/admin.html',
        controller: 'AdminController as AdminCtrl',
        authenticate: true,
        login: false
    });
}).run(function ($rootScope, $state, $log, AuthService) {
    $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {

        if(toState.authenticate){

            AuthService.auth.then(_authSuccess, _authFailure);

            function _authSuccess(res) {
                if(res.data && !res.data.auth){
                    $state.transitionTo("login");
                    event.preventDefault();
                }
            };

            function _authFailure() {
            };
        }else if(toState.login){
            AuthService.auth.then(_authSuccess, _authFailure);

            function _authSuccess(res) {
                if(res.data && res.data.auth){
                    $state.transitionTo("admin");
                    event.preventDefault();
                }
            };

            function _authFailure(res) {
            };
        }
    });
}).service('GetToken', function(){
    this.getToken = function(){
        var data = {
            _token: JSON.parse(sessionStorage.getItem("_token"))
        };
        return data;
    }
}).factory('AuthService', function ($http, $state, $log, GetToken) {

    var data = GetToken.getToken();

    function _checkAuthentication(){
        return $http.post('http://server.timothyradder:443/api/auth', data);
    }

    return {
        auth : _checkAuthentication()
    }
});