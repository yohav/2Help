tohelp.factory('MyHelps',function(){
    var helps =[
        {
            text: 'DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD',
            background_color: '#121212',
            color: 'white',
            user_img:'http://graph.facebook.com/1386855584/picture?height=70&width=70'
        },
        {
            text: 'building a website',
            background_color: '#7F7F82',
            color:'black',
            user_img:'http://graph.facebook.com/1386855584/picture?height=70&width=70'
        },
        {
            text: 'fixing the computer',
            background_color: '#4D74D7',
            color:'black',
            user_img:'http://graph.facebook.com/1386855584/picture?height=70&width=70'
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