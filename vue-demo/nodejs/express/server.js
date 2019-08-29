// Express 基于 Node.js 平台，快速、开放、极简的 Web 开发框架
// 参考文档：http://www.expressjs.com.cn/4x/api.html#express.router

var express = require('express')
var app = express()

// GET method route
app.get('/get', function (req, res) {
    console.log(req);
    res.send('GET request to the homepage')
})

// POST method route
app.post('/post', function (req, res) {
    res.send('POST request to the homepage')
})
const port = 3000;

console.log("The service runs on http://127.0.0.1:" + port);

app.listen(port);