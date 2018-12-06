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

/**
 * 横线连接转换驼峰
 * @param value 横线连接
 * @return {string}
 */
function lineToHump(value) {
    return value.replace(/\-(\w)/g, function(all, letter){
        return letter.toUpperCase();
    });
}

/**
 * 驼峰转换横线连接
 * @param value 驼峰
 * @returns {string}
 */
function humpToLine(value) {
    return value.replace(/([A-Z])/g,"-$1").toLowerCase();
}
