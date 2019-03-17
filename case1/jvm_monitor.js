$(function () {
    // 示例地址：http://192.168.14.141/web-demo/case1/jvm_monitor.html?sdeName=正式环境&finalName=shop-service
    var finalName = getQueryString("finalName"),
        sdeName = decodeURI(getQueryString("sdeName"));
    if (finalName != null && finalName.trim() !== "" && sdeName != null && sdeName.trim() !== "") {
        $('title').html(sdeName + finalName + "服务");
        $("#finalName").text(sdeName + finalName);
        queryData(finalName, 10, pageCallback);
        setInterval(function () {
            /** 每10秒刷新 */
            queryData(finalName, 10, pageCallback);
        }, 10000);
    } else {
        alert("查询数据异常！")
    }
});

/** DOM节点 */
var cpuChart = echarts.init(document.getElementById("cpuLine")),
    heapChart = echarts.init(document.getElementById("heapLine")),
    threadChart = echarts.init(document.getElementById("threadLine")),
    gcEdenLine = echarts.init(document.getElementById("gcEdenLine")),
    gcOldLine = echarts.init(document.getElementById("gcOldLine"));

/** 请求回调，绘制图表 */
function pageCallback (data, total) {
    var edenData = [],
        surData = [],
        oldData = [],
        metaData = [],
        threads = [],
        httpThreads = [],
        dubboThreads = [],
        esThreads = [],
        singleCoreCpuLoad = [],
        minorGcCollectorHeaps = [],
        minorGcAfterHeaps = [],
        fullGcCollectorHeaps = [],
        fullGcAfterHeaps = [],
        timeData = [],
        processors = 0;

    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        edenData.unshift(parseInt(item.edenUseBytes));
        surData.unshift(parseInt(item.surUsedBytes));
        oldData.unshift(parseInt(item.oldUsedBytes));
        metaData.unshift(parseInt(item.permUsedBytes));
        threads.unshift(parseInt(item.runCount));
        httpThreads.unshift(parseInt(item.httpRunCount));
        dubboThreads.unshift(parseInt(item.dubboRunCount));
        esThreads.unshift(parseInt(item.esCount));
        singleCoreCpuLoad.unshift(parseFloat(item.singleCoreCpuLoad));
        minorGcCollectorHeaps.unshift(parseInt(item.minorGcBeforeHeap) - parseInt(item.minorGcAfterHeap));
        minorGcAfterHeaps.unshift(parseInt(item.minorGcAfterHeap));
        fullGcCollectorHeaps.unshift(parseInt(item.fullGcBeforeHeap) - parseInt(item.fullGcAfterHeap));
        fullGcAfterHeaps.unshift(parseInt(item.fullGcAfterHeap));
        timeData.unshift(item.collectorTime.split(".")[0].split("T")[1]);
        if (processors === 0) {
            processors = item.processors;
        }
    }
    /** 绘制DOM */
    cpuChart.setOption({
        title: {
            text: 'CPU监控图',
            show: false
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ["CPU占比"]
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                name: "时间",
                boundaryGap : false,
                data : timeData
            }
        ],
        yAxis : [
            {
                type : 'value',
                name: "CPU占比（%）"
            }
        ],
        series : [
            {
                name:'CPU占比',
                type:'line',
                stack: '总量',
                areaStyle: {},
                data: singleCoreCpuLoad
            }
        ]
    });
    heapChart.setOption({
        title: {
            text: '内存监控图',
            show: false
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ["Eden", "Survivor", "Tenured", "Meta Space"]
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                name: "时间",
                boundaryGap : false,
                data : timeData
            }
        ],
        yAxis : [
            {
                type : 'value',
                name: "使用量（MB）"
            }
        ],
        series : [
            {
                name:'Eden',
                type:'line',
                stack: '总量',
                areaStyle: {},
                data: edenData
            },
            {
                name:'Survivor',
                type:'line',
                stack: '总量',
                areaStyle: {},
                data: surData
            },
            {
                name:'Tenured',
                type:'line',
                stack: '总量',
                areaStyle: {},
                data: oldData
            },
            {
                name:'Meta Space',
                type:'line',
                stack: '总量',
                areaStyle: {},
                data: metaData
            }
        ]
    });
    threadChart.setOption({
        title: {
            text: '线程监控图',
            show: false
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['运行总量', 'http运行量', 'dubbo运行量', 'ES运行量']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            name: "时间",
            boundaryGap: false,
            data: timeData
        },
        yAxis: {
            type: 'value',
            name: "线程数"
        },
        series: [
            {
                name:'运行总量',
                type:'line',
                stack: '总量',
                data: threads
            },
            {
                name:'http运行量',
                type:'line',
                stack: '总量',
                data: httpThreads
            },
            {
                name:'dubbo运行量',
                type:'line',
                stack: '总量',
                data: dubboThreads
            },
            {
                name:'ES运行量',
                type:'line',
                stack: '总量',
                data: esThreads
            }
        ]
    });
    gcEdenLine.setOption({
        title: {
            text: 'Minor监控图',
            show: false
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {
                type : 'shadow'
            }
        },
        legend: {
            data: ['使用量', '回收量']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis:  {
            type: 'category',
            name: "时间",
            data: timeData
        },
        yAxis: {
            type: 'value',
            name: "堆内存（MB）"
        },
        series: [
            {
                name: '使用量',
                type: 'bar',
                stack: '总量',
                data: minorGcAfterHeaps
            },
            {
                name: '回收量',
                type: 'bar',
                stack: '总量',
                data: minorGcCollectorHeaps
            }
        ]
    });
    gcOldLine.setOption({
        title: {
            text: 'FullGC监控图',
            show: false
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {
                type : 'shadow'
            }
        },
        legend: {
            data: ['回收量', 'GC后']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis:  {
            type: 'category',
            name: "时间",
            data: timeData
        },
        yAxis: {
            type: 'value',
            name: "堆内存（MB）"
        },
        series: [
            {
                name: '回收量',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'insideBottom'
                    }
                },
                data: fullGcCollectorHeaps
            },
            {
                name: 'GC后',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideBottom'
                    }
                },
                data: fullGcAfterHeaps
            }
        ]
    });

    // JVM 配置的最大值
    var value = "Eden：" + data[0].edenMaxBytes + "MB"
        + " Survivor：" + data[0].surMaxBytes + "MB"
        + " Tenured：" + data[0].oldMaxBytes + "MB"
        + " Meta Space：" + data[0].permMaxBytes + "MB";
    $("#initValue").text(value);
    $("#processors").text("（" + processors + " Core）");
};

/**
 * 请求数据
 * @param finalName 服务名
 * @param limit       查询数量
 * @param callback    回调函数
 */
function queryData(finalName, limit, callback) {
    var esIndex = "/zxcity_elk_jvm_monitor." + getDate(),
        startDate = $('#startDate').val(),
        endDate = $('#endDate').val(),
        params = {},
        match = {},
        must = [];

    // ES模糊匹配
    finalName = finalName.indexOf("-") > 1 ? finalName.split("-")[0] : finalName;
    console.log("finalName：", finalName);

    if (finalName != null && finalName.trim() !== "") {
        match = {"message.finalName": finalName.trim()};
        must.push({match: match});
    }
    if (startDate != null && endDate != null && startDate.trim() !== "" && endDate.trim() !== "") {
        var range = {
            "log_date": {
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
    params.from = 0;
    params.size = limit;
    params.sort = [{"@timestamp": "desc"}];
    console.log("==============请求参数================");
    console.log(params);
    console.log("==============请求参数================");

    /// TODO: 正式环境打开
    var hostName = window.location.hostname;

    $.ajax({
        url: "http://" + hostName + esIndex + "/file/_search",
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
                data.push(dataList[i]._source.message);
            }
            return callback(data, total);
        },
        error: function (res) {
            console.log("error: ", res);
        }
    });
}

/**
 * 获取当前日期，格式：yyyy-MM
 */
function getDate () {
    var date = new Date();
    var month = parseInt(date.getMonth()) + 1;
    if(month < 10) {
        month = "0" + month;
    }
    return date.getFullYear() + "-" + month;
}
/**
 * 根据参数名获取地址栏URL里的参数
 */
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var decodeUri = decodeURI(window.location.search);
    var r = decodeUri.substr(1).match(reg);
    if(r != null) return unescape(r[2]);
    return null;
}
