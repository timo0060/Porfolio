app.controller("EditCtrl", function($scope, $http, $state, $stateParams, AuthenticateService){
    $scope.id = $stateParams.id;
    
    $scope.token = JSON.parse(sessionStorage.getItem('_token'));
    if($scope.token === null){
        $state.go('login');
    }
    AuthenticateService.checkToken($scope.token);    
    
    //--------------------BEGIN TABS-------------------------------------------    
    $scope.tabs = [
        {heading: "Code", route: "edit.code", active: true},
        {heading: "Preview", route: "edit.preview", active: false}
    ];    
    //---------------------END TABS---------------------------------------------   
    
    var data = {
        id: $scope.id
    };
    
    $http.post('res/scripts/getPost.php', data).success(function(res){
        $scope.post = res.post[0];
    }).error(function(error){
        console.log(error);
    });
    
    $scope.savePost = function(){
        var data = {
            id: $scope.post.id,
            title: $scope.post.title,
            content: $scope.post.content,
            description: $scope.post.description
        };
        $http.post('res/scripts/updatePost.php', data).success(function(res){
            if(res){
                $state.go("admin");
            }else{
                console.log("An Error has occured");
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