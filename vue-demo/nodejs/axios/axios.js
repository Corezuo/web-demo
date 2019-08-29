/**
 * axios 易用、简洁且高效的http库；支持node端和浏览器端；使用Promise管理异步，告别传统callback方式；支持拦截器等高级配置
 */
var axios = require("axios");

const baseUrl = "http://127.0.0.1:3000";

// GET 
axios.get(baseUrl + "/get")
    .then(function (res) {
        // console.log("succ: ", res);
        console.log("status: ", res.status);
        console.log("data: ", res.data);
    })
    .catch(function (err) {
        console.log("error");
    })
    .then(function () {
        // always executed
    });

// POST
axios.post(baseUrl + "/post", {
        firstName: 'Fred',
        lastName: 'Flintstone'
    })
    .then(function (res) {
        console.log("status: ", res.status);
        console.log("data: ", res.data);
    })
    .catch(function (error) {
        console.log("error");
        // console.log(error);
    });
