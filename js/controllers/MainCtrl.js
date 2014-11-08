tohelp.controller('MainCtrl', function($scope) {
    $scope.currntSlide = 0;
    $scope.slideHasChanged = function(index){
       $scope.currntSlide = index;
    }
});