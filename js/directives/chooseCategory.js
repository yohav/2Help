tohelp.directive('chooseCategory', function($document, $http,usersService,$state,$rootScope) {

    return {
        restrict: 'E',
        scope:{
          mySkills: '@'
        },
        link: function($scope, $element, $attr) {

            $scope.title= $scope.mySkills=="true" ? "Choose Your Skills" : "Choose Wanted Skills";

            $http.get('http://timebank.azurewebsites.net/api/businesses').success(function(data) {
                $scope.currentBusiness = data;
            });

            $scope.previousBusiness = [];
            $scope.chosen = [];
        	$scope.businessClick = function(index) {
        		if($scope.currentBusiness[index].Children.length) {
                    $scope.previousBusiness.push($scope.currentBusiness);
        			$scope.currentBusiness = $scope.currentBusiness[index].Children;
        		} else {
        			$scope.chooseBusiness(index);
        		}
        	};

        	$scope.chooseBusiness = function(index){
        		var skill = $scope.currentBusiness[index];

        		if ($scope.isChosen(skill)) {
                    $scope.chosen.splice($scope.chosen.indexOf(skill),1);
        		} else {
                    $scope.chosen.push(skill);
        		}	
        	};

        	$scope.isChosen = function(skill) {
        		if ($scope.chosen.indexOf(skill) == -1) {
        			return false;
        		}

        		return true;
        	};

        	$scope.back = function() {
        		if ($scope.previousBusiness.length) {
        			$scope.currentBusiness = $scope.previousBusiness.pop();
        		}
        	};

            $scope.saveSkills = function(){
                var skillIds = $scope.chosen.map(function(skill){
                   return skill.ID;
                });
                if($scope.mySkills == "true") {
                    usersService.SaveSkills(skillIds).success(function () {
                        $state.go('main');
                    });
                }
                else{
                    localStorage.setItem('WantedSkills',JSON.stringify(skillIds));
                    $state.go('main');
                    $rootScope.$broadcast('wantedSkillsChoosed');
                }
            };

        },
        templateUrl: 'partials/chooseCategory.html'

    }
});