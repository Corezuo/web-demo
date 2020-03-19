var express = require('express');

var app = express()
app.get('/', function(req, res){
  // res.send('<h1>Hello world</h1>');
  res.sendFile(__dirname + '/index.html')
});

app.listen(8080, function(){
  console.log('listening on *:8080');
});
