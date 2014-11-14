tohelp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: 'partials/main.html',
            controller: 'MainCtrl',
            module: 'private'
        })
       .state('createProfile', {
            url: '/createProfile',
            templateUrl: 'partials/createProfile.html',
            controller: 'createProfileCtrl',
            module: 'private'
        })
        .state('wantedSkills', {
            url: '/wantedSkills',
            templateUrl: 'partials/wantedSkills.html',
            controller: 'createProfileCtrl',
            module: 'private'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'partials/login.html',
            controller: 'LoginCtrl',
            module: 'public'
        });
    $urlRouterProvider.otherwise("/main");
});