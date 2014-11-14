tohelp.controller('ProfileCtrl', function($scope,$ionicSlideBoxDelegate,FBService,usersService,$state,$ionicPopup) {
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

angular.module("RatingApp", [])
.controller("RatingCtrl", function($scope) {
  $scope.rating = 5;
  $scope.rateFunction = function(rating) {
    alert("Rating selected - " + rating);
  };
})
.directive("starRating", function() {
  return {
    restrict : "A",
    template : "<ul class='rating'>" +
               "  <li ng-repeat='star in stars' ng-class='star' ng-click='toggle($index)'>" +
               "    <i class='fa fa-star'></i>" + //&#9733
               "  </li>" +
               "</ul>",
    scope : {
      ratingValue : "=",
      max : "=",
      onRatingSelected : "&"
    },
    link : function(scope, elem, attrs) {
      var updateStars = function() {
        scope.stars = [];
        for ( var i = 0; i < scope.max; i++) {
          scope.stars.push({
            filled : i < scope.ratingValue
          });
        }
      };
      scope.toggle = function(index) {
        scope.ratingValue = index + 1;
        scope.onRatingSelected({
          rating : index + 1
        });
      };
      scope.$watch("ratingValue", function(oldVal, newVal) {
        if (newVal) { updateStars(); }
      });
    }
  };
});