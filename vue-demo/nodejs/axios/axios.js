/**
 * axios 易用、简洁且高效的http库；支持node端和浏览器端；使用Promise管理异步，告别传统callback方式；支持拦截器等高级配置
 */
var axios = require("axios");

const baseUrl = "http://127.0.0.1:8080";

// GET 
function requestGet () {
    axios.get(baseUrl + "/get")
        .then(function (res) {
            console.log("status: ", res.status);
            console.log("data: ", res.data);
        })
        .catch(function (err) {
            console.log("error");
        })
        .then(function () {
            // always executed
        });
}

/**
 * POST 默认情况下，axios将JavaScript对象序列化为JSON
 * 格式：application/json; charset=utf-8
 */
function requestJson () {
    axios.post(baseUrl + "/json", {
        id: 1,
        name: 'dazuo'
    })
    .then(function (res) {
        console.log("status: ", res.status);
        console.log("data: ", res.data);
    })
    .catch(function (error) {
        console.log("error");
    });
}

/**
 * POST 格式：application / x-www-form-urlencoded
 */
function requestForm () {
    const params = new URLSearchParams();
    params.append('name', 'dazuo');

    axios.post(baseUrl + "/hello", params)
        .then(function (res) {
            console.log("status: ", res.status);
            console.log("data: ", res.data);
        })
        .catch(function (err) {
            console.log("error");
        });
}
requestForm();