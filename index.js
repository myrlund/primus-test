var Primus = require('primus');
var http = require('http');

var server = http.createServer();

var transformers = ['engine.io', 'socket.io', 'sockjs'];
var servers = transformers.map(function (transformer) {
    return new Primus(server, { transformer: transformer, pathname: '/' + transformer });
});

server.listen(8000);
