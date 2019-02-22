/**
 * 请求数据
 * @param index    当前页码
 * @param limit    查询数量
 * @param callback 回调函数
 */
function pageCallback(index, limit, callback) {
    var startDate = $('#startDate').val(),
        endDate = $('#endDate').val(),
        params = {},
        must = [];

    if (startDate != null && endDate != null && startDate.trim() !== "" && endDate.trim() !== "") {
        var range = {
            "log_timestamp": {
                "from": startDate.trim(),
                "to": endDate.trim(),
                "format": "yyyy-MM-dd HH:mm:ss",
                "time_zone": "+08:00"
            }
        };
        must.push({range: range});
    }
    params.query = {
        "bool": {
            "must": must
        }
    };
    params.from = (index - 1) * limit;
    params.size = limit;
    params.sort = [{"collect_time": "desc"}];
    console.log("==============请求结果================");
    console.log(params);
    console.log("==============请求结果================");

    $.ajax({
        url: "http://139.129.xxx.xxx:9200/zxcity_jvm_monitor/file/_search",
        type: "POST",
        dateType: "json",
        data: JSON.stringify(params),
        contentType: "application/json; charset=UTF-8",
        success: function (res) {
            console.log("==============请求结果================");
            console.log(res);
            console.log("==============请求结果================");
            var dataList = res.hits.hits,
                total = res.hits.total,
                data = [];
            for (var i = 0; i < dataList.length; i++) {
                data.push(dataList[i]._source);
            }
            return callback(data, total);
        },
        error: function (res) {
            console.log("error: ", res);
        }
    });
}

Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "H+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};




