/**
 * Created by Tim on 9/6/2016.
 */
app.controller('LoginController', function ($scope, $http, $log, Flash, $state) {
    $log.debug("Login Controller");
    $scope.login = {};

    $scope.checkForm = function(){
        var data = {
            username: $scope.login.username,
            password: $scope.login.password
        };
        $http.post('http://server.timothyradder:443/api/login', data).success(function (data, status) {
            $log.debug(status);
            if(status == 200) {
                var message = data.message;
                var id = Flash.create(data.flash, message, 3000, {}, true);
                //$state.go('home');
            }else{
                var message = data.message;
                var id = Flash.create(data.flash, message, 3000, {}, true);
            }
        }).error(function (error) {
            $log.error(error);
        });
    };

    $scope.clearForm = function(){
        $scope.login = {};
    };
});