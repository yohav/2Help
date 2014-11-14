tohelp.controller('CardsCtrl', function($scope, Events,$ionicSlideBoxDelegate) {

    $scope.cards = Events.GetMyEvents();

    //$scope.cards = Array.prototype.slice.call(cardTypes, 0);

    $scope.cardDestroyed = function() {
        console.log('destroyed');
        $scope.cards.splice(0, 1);
    };

    $scope.cardSwipedRight = function(){
        console.log('right');
    };
    $scope.cardSwipedLeft = function(){
        console.log('left');
    };
    $scope.onPartialSwipe = function(amt){
        $scope.cards[0].leftTextOpacity = {'opacity': amt > 0 ? amt+0.3 : 0 };
        $scope.cards[0].rightTextOpacity = { 'opacity': amt < 0 ? Math.abs(amt)+0.3 : 0};
    };

    $scope.goSettings = function(){
        $ionicSlideBoxDelegate.previous();
    };
    $scope.goChat = function(){
        $ionicSlideBoxDelegate.next();
    };
});
