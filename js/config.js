tohelp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: 'partials/main.html',
            controller: 'MainCtrl'
        });
    $urlRouterProvider.otherwise("/main");
});