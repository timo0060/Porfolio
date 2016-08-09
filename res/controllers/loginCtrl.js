app.controller('LoginCtrl', function($scope, $http, $state, AuthenticateService){
    
    if(sessionStorage.getItem('_token') != null){
        var token = JSON.parse(sessionStorage.getItem('_token'));
        var loggedIn = AuthenticateService.getLoggedIn();
        if(loggedIn){
            $state.go('admin');
        }
    }
    
    $scope.login = function(){
        
        var data = {
            username: $scope.loginForm.username,
            password: $scope.loginForm.password
        };
        
        $http.post('res/scripts/login.php', data).success(function(res){
            if(!res.error){
                sessionStorage.setItem('_token', JSON.stringify(res.token));
                $state.go('admin');
            }else{
                document.getElementById("LoginError").innerHTML = res.errorMsg;
            }
        }).error(function(error){
            document.getElementById("LoginError").innerHTML = error;
        });
    };
    
    $scope.clearForm = function(){
        $scope.loginForm = {};
    };
    
});