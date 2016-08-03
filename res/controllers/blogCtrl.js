app.controller("BlogCtrl", function($scope, $http){
    
    $scope.hasPosts = false;
    
    $http.post("res/scripts/getPosts.php").success(function(res){
        
        if(res.postCount > 0){
            $scope.posts = res.posts;
            $scope.hasPosts = true;
        }
        
    }).error(function(error){
        console.log(error);
    });
    
});