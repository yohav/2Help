tohelp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: 'main.html',
            controller: 'MainCtrl'
        });
    $urlRouterProvider.otherwise("/main");
});