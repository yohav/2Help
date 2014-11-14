tohelp.controller('ProfileCtrl', function($scope,$ionicSlideBoxDelegate,FBService,usersService) {
    $scope.goApp = function(){
        $ionicSlideBoxDelegate.next();
    };

    FBService.GetInfo().then(function(user){
        $scope.user = user;
        $scope.name = $scope.user.first_name + " " + $scope.user.last_name;
        $scope.image = "https://graph.facebook.com/"+$scope.user.id+"/picture?type=large";
    });

    usersService.Get().success(function(user){
        $scope.amount = user.amount;
        $scope.RankAsCustomer = user.RankAsCustomer;
        $scope.RankAsSpplier = user.RankAsSpplier;
    });

});