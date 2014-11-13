tohelp.run(['$state', '$rootScope','usersService', function($state, $rootScope,usersService) {
    $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
        if (toState.module === 'private') {
            usersService.GetLoginStatus().then(function(data){
                if(!data.token) {
                    console.log(data.token);
                    e.preventDefault();
                    $state.go('login');
                }
                else{
                    console.log('not logged');
                }
            });

        }
    });
}]);
