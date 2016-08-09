app.controller("PostCtrl", function($scope, $http, $sce, $stateParams){
    
    $scope.preview = false;
    
    $scope.id = $stateParams.id;
    
    var data = {
        id: $scope.id
    };
    
    $http.post("res/scripts/getPost.php", data).success(function(res){
        if(!res.error){
            $scope.post = res.post[0];
            $scope.post.content = $sce.trustAsHtml($scope.post.content);
        }else{
            console.log(res.errorMsg);
        }
    }).error(function(error){
        console.log(error);
    });
});