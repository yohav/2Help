tohelp.directive('chooseCategory', function($document, $http) {

    return {
        restrict: 'E',
        link: function($scope, $element, $attr) {

            $http.get('http://timebank.azurewebsites.net/api/businesses').success(function(data) {
                $scope.currentBusiness = data;
            });

        	previousBusiness = [];
        	chosen = [];
        	$scope.businessClick = function(index) {
        		if($scope.currentBusiness[index].Children.length) {
        			previousBusiness.push($scope.currentBusiness);
        			$scope.currentBusiness = $scope.currentBusiness[index].Children;
        		} else {
        			$scope.chooseBusiness(index);
        		}
        	}

        	$scope.chooseBusiness = function(index){
        		var title = $scope.currentBusiness[index].Name;

        		if ($scope.isChosen(title)) {
        			chosen.splice(chosen.indexOf(title));
        		} else {
        			chosen.push(title);	
        		}	
        	}

        	$scope.isChosen = function(title) {
        		if (chosen.indexOf(title) == -1) {
        			return false;
        		}

        		return true;
        	};

        	$scope.back = function() {
        		if (previousBusiness.length) {
        			$scope.currentBusiness = previousBusiness.pop();
        		}
        	}
        },
        templateUrl: 'partials/chooseCategory.html'

    }
})