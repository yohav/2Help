tohelp.controller('LoginCtrl', function($scope,FBService,usersService,$state) {
    $scope.height = $('body').height();
    $scope.width = $('body').width();
    $scope.style={'width':$scope.width,'height':$scope.height};
    $scope.login = function(){
        FBService.Login().then(function(data){
            if(data.token) {
                localStorage.setItem("fbToken", data.token);
                FBService.GetInfo().then(function (user_data) {
                    localStorage.setItem("fbID", user_data.id);
                    usersService.Save();
                    $state.go('createProfile');
                });
            }
        });
    };
});