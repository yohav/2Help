tohelp.controller('ChatCtrl', function($scope,$ionicSlideBoxDelegate, $http, usersService,$q) {
    $scope.goApp = function(){
        $ionicSlideBoxDelegate.previous();
    };

    $scope.agree = function(eventId) {
		$http.post('http://timebank.azurewebsites.net/api/agree/' + eventId)    	
    }


     $http.get('http://timebank.azurewebsites.net/api/eventsbysupplier/' + localStorage.getItem('fbID')).success(function(data) {
    	$scope.events = data.map(function(e) {
    		e.image = "https://graph.facebook.com/"+ e.CustomerFBID + "/picture?width=100&height=100";
    		return e;
    	});
    	$scope.events.forEach(function(e){
    		$http.get('http://timebank.azurewebsites.net/api/businessname/' + e.BusinessID).then(function(data){
    			e.businessname = data.data[0];
    		});
    	});
    });
});