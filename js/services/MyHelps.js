tohelp.factory('MyHelps',function(){
    var helps =[
        {
            text: 'DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD',
            background_color: '#121212',
            color: 'white',
            user_img:'http://graph.facebook.com/1386855584/picture?height=120&width=120',
            username:'Yoav',
            price:3
        },
        {
            text: 'building a website',
            background_color: '#7F7F82',
            color:'black',
            user_img:'http://graph.facebook.com/1275848301/picture?height=120&width=120',
            username:'Alex',
            price:5
        },
        {
            text: 'fixing the computer',
            background_color: '#4D74D7',
            color:'black',
            user_img:'http://graph.facebook.com/1065651033/picture?height=120&width=120',
            username:'Yael',
            price:7
        }
    ];

    var addHelp = function(new_help){
        helps.push(new_help);
    };

    var removeHelp = function(new_help){

    };

    var getHelps = function(){
        return helps;
    };
    return {
        AddHelp: addHelp,
        RemoveHelp: removeHelp,
        GetHelps: getHelps
    }
});