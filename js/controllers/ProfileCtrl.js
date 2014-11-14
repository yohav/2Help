tohelp.controller('ProfileCtrl', function($scope,$ionicSlideBoxDelegate,FBService,usersService,$state,$ionicPopup) {
    $scope.goApp = function(){
        $ionicSlideBoxDelegate.next();
    };

    $scope.id = localStorage.getItem('fbID');

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
        if($scope.isCoordsSet()) {
            $state.go('wantedSkills');
        }
        else
        {
            $ionicPopup.alert({
                title: 'Location Error',
                template: 'You should set your location before proceeding'
            });
        }
    };

    $scope.setMyLocation = function(){
        navigator.geolocation.getCurrentPosition(function (pos) {
            var coords = pos.coords;
            $scope.$apply(localStorage.setItem('coords', JSON.stringify(coords)));
            usersService.SaveLocation(JSON.stringify(coords));
            $ionicPopup.alert({
                title: 'Location Saved',
                template: 'Location saved successfully'
            });
        });
    };

    $scope.isCoordsSet = function(){
        return localStorage.getItem('coords') != null;
    }

    $scope.updateSkills = function() {
        $state.go('createProfile')
    }

});