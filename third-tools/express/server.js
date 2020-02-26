// Express 基于 Node.js 平台，快速、开放、极简的 Web 开发框架
// 参考文档：http://www.expressjs.com.cn/4x/api.html#express.router

var express = require('express')
var bodyParser = require('body-parser');

var app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET method route
app.get('/get', function (req, res) {
    console.log(req);
    res.send('GET request to the homepage')
})

/**
 * POST 格式：application / x-www-form-urlencoded
 */
app.post('/hello', function (req, res) {
    console.log(req.body);
    res.send('POST request to the homepage')
});

/**
 * POST 格式：application/json; charset=utf-8
 */
app.post('/json', function (req, res) {
    console.log(req.body);
    res.send('POST request to the homepage')
});

const port = 8080;

console.log("The service runs on http://127.0.0.1:" + port);

app.listen(port);