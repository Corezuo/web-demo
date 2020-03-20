var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  // res.send('<h1>Hello world</h1>');
  res.sendFile(__dirname + '/index.html')
});

io.on('connection', function(socket){
  console.log('新用户' + socket.id + '连接');

  // 广播消息
  socket.broadcast.emit('userin', '新用户' + socket.id + '加入');

  // 自定义消息事件（监听客户端消息）
  socket.on('msg', function(msg){
    console.log('用户' + socket.id + '消息：' + msg);
  });

  // 加入房间
  socket.on('join-room', function (roomName) {
    console.log('join-room: ', socket.id , ', ', roomName)
    socket.join(roomName)
  })
  
  // 离开房间
  socket.on('leave-room', function (roomName) {
    console.log('leave-room: ', socket.id , ', ', roomName)
    socket.leave(roomName)
  })

  // 往房间发送消息
  socket.on('send-msg-to-room', function (msg) {
    const data = JSON.parse(msg)
    console.log('send-msg-to-room:' , socket.id, ', ', data)

    // 向房间里的所有客户端发送消息
    io.to(data.roomName).emit('userin', data.msg)
  })

  socket.on('disconnect',()=>{
    console.log('用户' + socket.id + '断开连接');
  });
});

http.listen(8888, function(){
  console.log('listening on *:8888');
});