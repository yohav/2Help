tohelp.directive('chooseCategory', function($document) {

    return {
        restrict: 'E',
        link: function($scope, $element, $attr) {
        	$scope.currentCategories = $scope.categories
        	previousCategories = []
        	chosen = []


        	$scope.categoryClick = function(index) {
        		if($scope.currentCategories[index].subs.length) {
        			previousCategories.push($scope.currentCategories);
        			$scope.currentCategories = $scope.currentCategories[index].subs;
        		} else {
        			$scope.chooseCategory(index);
        		}
        	}

        	$scope.chooseCategory = function(index){
        		var title = $scope.currentCategories[index].title;

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
        		if (previousCategories.length) {
        			$scope.currentCategories = previousCategories.pop();
        		}
        	}
        },
        scope: {
        	categories: '='
      	},
        templateUrl: 'partials/chooseCategory.html'

    }
})