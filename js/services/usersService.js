tohelp.factory('usersService',function($http,$q){
    var fbID = localStorage.getItem('fbID');

    var save = function(){
        get().success(function(userExists){
            if(userExists == "null") {
                $http.post('http://timebank.azurewebsites.net/api/users', fbID);
            }
        });
    };

    var get = function(id){
        var id = id || fbID;
        return $http.get('http://timebank.azurewebsites.net/api/users/'+id);
    };

    var saveSkills = function(skills){
        return $http.post('http://timebank.azurewebsites.net/api/users/'+fbID,skills);
    };

    var saveLocation = function(coords){
        return $http.post('http://timebank.azurewebsites.net/api/users/'+fbID,coords);
    };

    return {
        Save: save,
        Get: get,
        SaveSkills: saveSkills,
        SaveLocation: saveLocation
    }
});