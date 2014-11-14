tohelp.factory('Events',function(usersService,$http,$q){


    var addEvent= function(supplierID,buyerID,skillID){

    };

    var removeEvent = function(eventID){

    };

    var getMyEvents = function(buyerID){
    };

    var getNearByEvents = function(skillID){
        var defferd = $q.defer();
        $http.get('http://timebank.azurewebsites.net/api/suppliers/'+skillID).then(function(suppliers){
            var user_location = JSON.parse(localStorage.getItem('coords'));
            var user_latitude = user_location.latitude;
            var user_longitude = user_location.longitude;
            suppliers.data.forEach(function(supplier){
                var supplier_location = JSON.parse(supplier.UserLocation);
                if(supplier.UserLocation != "{}") {
                    var supplier_latitude = supplier_location.latitude;
                    var supplier_longitude = supplier_location.longitude;
                }
                else{
                    supplier_latitude = 0;
                    supplier_longitude = 0;
                }
                suppliers.distance = locationDistance(user_latitude,user_longitude,supplier_latitude,supplier_longitude)
            });
            defferd.resolve(suppliers);
        });
        return defferd.promise;
    };

    var locationDistance = function(lat1, lon1, lat2, lon2){
        var radlat1 = Math.PI * lat1/180;
        var radlat2 = Math.PI * lat2/180;
        var radlon1 = Math.PI * lon1/180;
        var radlon2 = Math.PI * lon2/180;
        var theta = lon1-lon2;
        var radtheta = Math.PI * theta/180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        dist = dist * 1.609344;
        return dist;
    };

    return {
        AddEvent: addEvent,
        RemoveEvent: removeEvent,
        GetMyEvents: getMyEvents,
        GetNearByEvents: getNearByEvents
    }
});