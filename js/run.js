tohelp.run(['$state', '$rootScope','FBService', function($state, $rootScope,FBService) {
    $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
        FBService.GetLoginStatus().then(function(data){
            e.preventDefault();
            FBService.GetLoginStatus();
            var loggedIn = data.token;
            if(!loggedIn && toState.module == 'private'){
                $state.go('login');
            }
            if(loggedIn && toState.module == 'public'){
                $state.go('main');
            }
        });
    });
}]);
