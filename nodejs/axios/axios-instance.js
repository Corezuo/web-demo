var axios = require("axios");

// 创建实例
var axiosInst = axios.create({
    baseURL: "http://127.0.0.1:8080",
    timeout: 1000,
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    }
});

// 添加请求拦截器
axiosInst.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log("request before ... ");
    console.log("config: ", config);
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 实例方法
// axiosInst.get("/get")
//     .then(function (resp) {
//         console.log(resp.status);
//         console.log(resp.data);
//     })
//     .catch(function (err) {
//         console.log("err");
//     });

// 默认发送json
axiosInst.post("/json", {
        id: 22,
        name: "dazuo"
    })
    .then(function (resp) {
        console.log(resp.status);
        console.log(resp.data);
    })
    .catch(function (err) {
        console.log("err");
    });

