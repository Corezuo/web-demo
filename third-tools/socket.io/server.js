var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  // res.send('<h1>Hello world</h1>');
  res.sendFile(__dirname + '/index.html')
});

io.on('connection', function(socket){
  console.log('新用户' + socket.id + '连接');

  // 自定义消息事件（监听客户端消息）
  socket.on('msg', function(msg){
    console.log('用户' + socket.id + '消息：' + msg);
  });

  socket.on('disconnect',()=>{
    console.log('用户' + socket.id + '断开连接');
  });
});

http.listen(8888, function(){
  console.log('listening on *:8888');
});