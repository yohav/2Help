tohelp.controller('CardsCtrl', function($scope, Events,$ionicSlideBoxDelegate,$rootScope) {

    $rootScope.$on('wantedSkillsChoosed',function(){
        var wantedSkills = JSON.parse(localStorage.getItem('WantedSkills'))[0];
        Events.GetNearByEvents(wantedSkills).then(function(data){
            $rootScope.cards = data.data;
        });
    });

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

    $scope.getRankOfSupplier = function(id){
        
    }

    $scope.goSettings = function(){
        $ionicSlideBoxDelegate.previous();
    };
    $scope.goChat = function(){
        $ionicSlideBoxDelegate.next();
    };
});
