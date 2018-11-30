/*统一请求*/
function baseRequest ($http, param) {
    if (!param.method) {
        param.method = "GET";
    } else {
        param.data = JSON.stringify(param.data);
    }
    $http({
        url: param.url,
        method: param.method,
        data: param.data
    }).then(
        function (res) {
            param.sCallback && param.sCallback(res);
        },
        function (res) {
            console.log("error: ", res);
        }
    );
}
