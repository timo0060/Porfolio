app.controller("AdminCtrl", function($scope, $http, $state, $rootScope, AuthenticateService){
    
    $scope.token = JSON.parse(sessionStorage.getItem('_token'));
    if($scope.token === null){
        $state.go('login');
    }
    AuthenticateService.checkToken($scope.token);   
    
    $scope.hasPosts = false;
    
    $http.post("res/scripts/getPosts.php").success(function(res){
        
        if(res.postCount > 0){
            $scope.posts = res.posts;
            $scope.hasPosts = true;
        }
        
    }).error(function(error){
        console.log(error);
    });
    
    $scope.deletePost = function(id){
        var data = {
            id: id
        };
        
        $http.post('res/scripts/deletePost.php', data).success(function(res){
            if(res){
                var index = 0;
                var found = false;
                angular.forEach($scope.posts, function(post){
                   if(!found){
                       if(post.id == id){
                           found = true;
                       }else{
                           index ++;
                       }
                   } 
                });
                
                $scope.posts.splice(index, 1);
            }else{
                console.log("An error has occured");
            }
        }).error(function(error){
            console.log(error);
        });
    };
    
    $scope.logout = function(){
        
        var data = {
            token: $scope.token
        }
        
        $http.post('res/scripts/logout.php', data).success(function(res){
            console.log(res);
            if(res){
                sessionStorage.clear();
                $state.go('home');
            }else{
                console.log(res);
            }
        }).error(function(error){
            console.log(error);
        })
    };
});