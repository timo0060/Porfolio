app.controller("NewPostCtrl", function($scope, $http, $state, $rootScope, AuthenticateService){
    
    $scope.token = JSON.parse(sessionStorage.getItem('_token'));
    if($scope.token === null){
        $state.go('login');
    }
    AuthenticateService.checkToken($scope.token);  
    
    //--------------------BEGIN TABS-------------------------------------------    
    $scope.tabs = [
        {heading: "Code", route: "newPost.code", active: true},
        {heading: "Preview", route: "newPost.preview", active: false}
    ];    
    //---------------------END TABS--------------------------------------------- 
   
    $scope.post = {
        title: "Hello",
        content: "Is it me you're looking for?",
        description: "Description about post here"
    };
    
    $scope.savePost = function(){
        var data = {
            title: $scope.post.title,
            content: $scope.post.content,
            description: $scope.post.description
        };
        
        $http.post('res/scripts/addPost.php', data).success(function(res){
            
            console.log(res);
            /*if(res){
                $state.go('admin');
            }else{
                console.log(res);
            }*/
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