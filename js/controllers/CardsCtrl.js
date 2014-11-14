tohelp.controller('CardsCtrl', function($scope, Events,$ionicSlideBoxDelegate,$rootScope,$timeout,usersService,$q) {

    $rootScope.$on('wantedSkillsChoosed',function(){
        $rootScope.wantedSkill = JSON.parse(localStorage.getItem('WantedSkills'))[0];
        Events.GetNearByEvents($rootScope.wantedSkill).then(function(data){
            $rootScope.cards = data.data;
            //remove self
            $rootScope.cards = $rootScope.cards.filter(function(supplier){
               return supplier.distance > -1;
            });
            $rootScope.cards.forEach(function(card){
                usersService.Get(card.FacebookID).then(function(data){
                    card.rank = data.data.RankAsSpplier;
                });
            });

            var sortCards = function() {
                var existingCards = $('td-card');

                for(i = 0; i < existingCards.length; i++) {
                    var card = existingCards[i];
                    if(!card) continue;
                    if(i > 0) {
                        card.style.transform = card.style.webkitTransform = 'translate3d(0, ' + (i * 4) + 'px, 0)';
                        card.style.pointerEvents = 'none';
                    }
                    card.style.zIndex = (existingCards.length - i);
                }
            };

            $timeout(function() {
                sortCards();
            });
        });
    });

    $scope.cardDestroyed = function() {
        console.log('destroyed');
        $rootScope.cards.splice(0, 1);
    };

    $scope.cardSwipedRight = function(card){
        console.log('right');
        var supplierID = card.FacebookID;
        var buyerID = localStorage.getItem('fbID');
        var skillID = $rootScope.wantedSkill;
        Events.AddEvent(supplierID,buyerID,skillID);
    };
    $scope.cardSwipedLeft = function(card){
        console.log('left');
    };
    $scope.onPartialSwipe = function(amt){
        $rootScope.cards[0].leftTextOpacity = {'opacity': amt > 0 ? amt+0.3 : 0 };
        $rootScope.cards[0].rightTextOpacity = { 'opacity': amt < 0 ? Math.abs(amt)+0.3 : 0};
    };

    $scope.goSettings = function(){
        $ionicSlideBoxDelegate.previous();
    };
    $scope.goChat = function(){
        $ionicSlideBoxDelegate.next();
    };
});
