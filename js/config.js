tohelp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: 'partials/main.html',
            controller: 'MainCtrl'
        })
       .state('createProfile', {
            url: '/createProfile',
            templateUrl: 'partials/createProfile.html',
            controller: 'createProfileCtrl'
        });
    $urlRouterProvider.otherwise("/main");
});