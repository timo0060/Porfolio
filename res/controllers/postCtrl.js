app.controller("PostCtrl", function($scope, $http, $stateParams){
    $scope.id = $stateParams.id;
    
    var data = {
        id: $scope.id
    };
    
    $http.post("res/scripts/getPost.php", data).success(function(res){
        if(!res.error){
            $scope.post = res.post[0];
        }else{
            console.log(res.errorMsg);
        }
    }).error(function(error){
        console.log(error);
    });
});