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
        })
        .state('login', {
            url: '/login',
            templateUrl: 'partials/login.html',
            controller: 'LoginCtrl',
            module: 'public'
        });
    $urlRouterProvider.otherwise("/main");
});