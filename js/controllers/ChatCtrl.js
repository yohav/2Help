tohelp.controller('ChatCtrl', function($scope,$ionicSlideBoxDelegate) {
    $scope.goApp = function(){
        $ionicSlideBoxDelegate.previous();
    };
});