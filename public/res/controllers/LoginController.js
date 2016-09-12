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
            $state.go('admin');
        }).error(function (error) {
            var message = data.message;
            var id = Flash.create(data.flash, message, 3000, {}, true);
        });
    };

    $scope.clearForm = function(){
        $scope.login = {};
    };
});