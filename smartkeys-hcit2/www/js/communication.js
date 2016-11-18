var socket = io("http://192.168.1.13:3000");


connectTo = function(ipaddr){
    console.log('dis');
    socket = io("http://"+ipaddr+':3000');

    socket.on('news', function (data) {
            console.log(data);
            socket.emit('my other event', { my: 'data' });
    });
    
}



sendMsg = function (type, object){
    socket.emit(type, object);
}
