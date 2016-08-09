app.service('AuthenticateService', ['$http', '$state', function($http, $state){
    
    var self = this;
    var loggedIn = true;
    
    self.checkToken = function(token){
        var data = {token: token};
        $http.post('res/scripts/AuthenticateService.php', data).success(function(res){
            if(!res){
                $state.go('login');
            }
        }).error(function(error){
            console.log(error);
        });
        
    }
    self.getLoggedIn = function(){
        return loggedIn;
    }
    
}]);