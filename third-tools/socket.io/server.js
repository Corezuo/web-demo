var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  // res.send('<h1>Hello world</h1>');
  res.sendFile(__dirname + '/index.html')
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});