const http = require('http');
const express = require('express')
const serveIndex = require('serve-index');
const app = express();

// 浏览静态目录（浏览目录中所有文件）
app.use(serveIndex('./'));
// 发布静态目录
app.use(express.static('./'));

var http_server = http.createServer(app);
http_server.listen(3000, '127.0.0.1');