tohelp.controller('ProfileCtrl', function($scope,$ionicSlideBoxDelegate,FBService,usersService,$state) {
    $scope.goApp = function(){
        $ionicSlideBoxDelegate.next();
    };

    FBService.GetInfo().then(function(user){
        $scope.user = user;
        $scope.name = $scope.user.first_name + " " + $scope.user.last_name;
        $scope.image = "https://graph.facebook.com/"+$scope.user.id+"/picture?width=100&height=100";
    });

    usersService.Get().success(function(user){
        $scope.amount = user.Amount;
        $scope.RankAsCustomer = user.RankAsCustomer;
        $scope.RankAsSpplier = user.RankAsSpplier;
    });

    $scope.chooseWanted = function(){
        $state.go('wantedSkills');
    }

});