tohelp.factory('usersService',function($http,$q){
    var fbID = localStorage.getItem('fbID');

    var save = function(){
        var userExists = get();
        if(!userExists) {
            $http.post('http://timebank.azurewebsites.net/api/users', fbID);
        }
    };

    var get = function(){
        return $http.get('http://timebank.azurewebsites.net/api/users/'+fbID);
    };

    return {
        Save: save,
        Get: get
    }
});