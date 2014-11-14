tohelp.factory('FBService',function($q){

    var statusChangeCallback = function(response){
        var deferred = $q.defer();
        if (response.status === 'connected') {
            deferred.resolve({token: response.authResponse.accessToken});
        } else if (response.status === 'not_authorized') {
            deferred.resolve({token: null});
        } else {
            deferred.resolve({token: null});
        }
        return deferred.promise;
    };

    var login = function(){
        var deferred = $q.defer();
        FB.login(function(response) {
            deferred.resolve(statusChangeCallback(response));
        });
        return deferred.promise;
    };

    var logout = function(){
        FB.logout();
    };

    var getLoginStatus = function(){
        var deferred = $q.defer();
        FB.getLoginStatus(function(response) {
            deferred.resolve(statusChangeCallback(response));
        });
        return deferred.promise;
    };

    var getInfo = function(){
        var deferred = $q.defer();
        FB.api('/me', {access_token :localStorage.getItem('fbToken')},function(response) {
            deferred.resolve(response);
        });
        return deferred.promise;
    };

    return {
        Login: login,
        Logout: logout,
        GetLoginStatus: getLoginStatus,
        GetInfo: getInfo

    }
});