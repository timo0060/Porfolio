/**
 * Created by Tim on 9/11/2016.
 */
angular.module('Portfolio').controller('AdminController', function($scope, $log, $http, $state){
    $scope.logout = function(){
        var data = {
           "_token": sessionStorage.getItem("_token")
        };
        $http.post('http://server.timothyradder:443/api/logout', data).then(function success(res){
            $log.debug(res.data);
            if(!res.data.error){
                sessionStorage.clear();
                $state.go('home');
            }
        }, function error(error){
            $log.error(error);
        });
    };
});
