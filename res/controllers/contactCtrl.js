app.controller('ContactCtrl', function($scope, $http){
    
    $scope.formSubmitted = false;
    
    $scope.submitForm = function(){
        $http({
            method: "post",
            url: "res/scripts/sendEmail.php",
            data: {
                name: $scope.name,
                email: $scope.email,
                subject: $scope.subject,
                message: $scope.message
            },
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function successCallback(res){
            console.log(res);
            if(res.data == "Success"){
                $scope.formSubmitted = true;
            }
        }, function errorCallback(res){
            console.log(res);
        });
    }
    
});