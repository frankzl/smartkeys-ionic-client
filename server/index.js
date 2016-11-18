var io = require('socket.io'),
    http = require('http'),
    server = http.createServer(),
    io = io.listen(server);

var express = require('express');
var app = express();
app.use('/js', express.static(__dirname + '/js'));
var $;
require("jsdom").env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }

    $ = require("jquery")(window);
});
var client = null;

io.on('connection', function(socket){
    console.log('user connected');
    socket.emit('news', {t:'yo'});

    socket.on('key', function(data){
        console.log(data);
        forwardData();
    })
});

server.listen(3000, function(){
    console.log('Server started');
})

forwardData = function(){
    $.post("http://127.0.0.1:3001",
            {
                name: "Donald Duck",
                city: "Duckburg"
            },
            function(data,status){
                console.log("Data: " + data + "\nStatus: " + status);
            }
          );
}
