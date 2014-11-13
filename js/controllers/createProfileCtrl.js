tohelp.controller('createProfileCtrl', function($scope) {
    $scope.categories = [{
    	title: 'academic',
    	subs:[{
    		title: 'math',
    		subs: []
    	},
    	{
    		title: 'english',
    		subs: []
    	}]
    },
    {
    	title:'sports',
    	subs:[{
    		title: 'climbing',
    		subs: []
    	},
    	{
    		title: 'tennis',
    		subs:[]
    	}]
    }]
});