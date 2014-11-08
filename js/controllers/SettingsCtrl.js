tohelp.controller('SettingsCtrl', function($scope,MyHelps,$timeout,$ionicScrollDelegate,$ionicSlideBoxDelegate) {
    $scope.check = function(e){
        if(e.keyCode == 13){
            e.preventDefault();
        }
    };
    $scope.$watch('newCard.text',function(){
        $scope.newCard.text = $scope.newCard.text.replace(/\n/, '');
    });

    $scope.changeColor = function(){
        $scope.newCard.background_color = '#' + Math.random().toString(16).substr(-6);
        $scope.newCard.color =  $scope.getColor($scope.newCard.background_color);
    };

    $scope.getColor = function(background_color){
        var r = parseInt(background_color.substr(1,2),16);
        var g = parseInt(background_color.substr(3,2),16);
        var b = parseInt(background_color.substr(5,2),16);
        var yiq = ((r*299)+(g*587)+(b*114))/1000;
        return  (yiq >= 128) ? 'black' : 'white';
    };

    $scope.publish = function(){
        if($scope.newCard.text.length > 3) {
            MyHelps.AddHelp($scope.newCard);
            $scope.helps.unshift($.extend({}, $scope.newCard));
            $scope.resetNewCard();
            $scope.newCardShown = false;
        }
    };

    $scope.resetNewCard = function(){
        $scope.newCard = {text:'',background_color:'',color:''};
    };

    $scope.isNewCardShown = function(){
        return $scope.newCardShown;
    };

    $scope.ShowNewCard = function(){
        $scope.newCardShown = !$scope.newCardShown;
        $timeout(function(){$('.help-settings-card textarea').focus();});
        $ionicScrollDelegate.scrollTop();
    };

    $scope.closeIfEmpty = function(){
        if($scope.newCard.text.length == 0){
            $scope.newCardShown = false;
            $ionicScrollDelegate.scrollTop();
        }
    };

    $scope.goApp = function(){
        $ionicSlideBoxDelegate.next();
    };

    $scope.newCardShown = false;
    $scope.helps = MyHelps.GetHelps();
    $scope.resetNewCard();
});