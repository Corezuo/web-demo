/*常用工具集*/
/**
 * 格式化字符串
 * @param args
 * @returns {String}
 */
String.prototype.format = function(args) {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if(args[key]!=undefined){
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    var reg= new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
};

/**
 * 获取随机字符串
 * @param len 指定长度
 * @returns {string}
 */
function randomString(len) {
    len = len || 32;
    var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    var maxPos = chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
        pwd += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}

/**
 * 计算倒计时,dom&时间戳
 * @param dom
 * @param closeTime
 */
function countdown(dom, closeTime) {
    var displayTime;

    function showTime() {
        var day = Math.floor(closeTime / (60 * 60 * 24));
        var hour = Math.floor(closeTime / (3600)) - (day * 24);
        var minute = Math.floor(closeTime / (60)) - (day * 24 * 60) - (hour * 60);
        var second = Math.floor(closeTime) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
        closeTime -= 1;
        var html = day + '天' + hour + '小时' + minute + '分' + second + '秒';
        dom.html(html);
        if(closeTime === -1) {
            clearInterval(displayTime);
            document.location.href = document.location.href;
            return;
        }
    }
    showTime();
    displayTime = setInterval(function() {
        showTime();
    }, 1000)
}

/**
 * 把数组字符串转换为数字
 * @param arr 数组
 * @returns {Array}
 */
function strToNum(arr) {
    var json = [];
    for(var i = 0; i < arr.length; i++) {
        json.push(arr[i] - 0);
    }
    return json;
}

/**
 * 判断正整数加".00"
 * @param s 正整数
 * @returns {*}
 */
function isPositiveNum(s) {
    var re = /^[0-9]*[1-9][0-9]*$/;
    if(re.test(s)) {
        s = s + ".00";
    }
    return s;
}

/**
 * 操作cookie
 * @param key 键
 * @param val 值
 * @param exp 有效期单位为秒
 */
function setCookie(key, val, exp) {
    var d = new Date();
    d.setTime(d.getTime() + exp * 1000); //1000为毫秒
    var expires = "expires=" + d.toUTCString();
    document.cookie = key + "=" + val + ";" + expires + ";path=/";
}

function getCookie(key) {
    var cookieArr = document.cookie.split(';');
    for(var i = 0; i < cookieArr.length; i++) {
        var u = cookieArr[i];
        u = u.replace(/(^\s*)|(\s*$)/g, '');
        var d = u.split('=');
        if(key == d[0]) {
            return d[1];
        }
    }
}

function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if(cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

/**
 * 判断input输入长度
 * @param inputStar 字符串
 * @returns {number}
 */
function inputLen(inputStar) {
    var bytesCount = 0;
    for(var i = 0; i < inputStar.length; i++) {
        var c = inputStar.charAt(i);
        bytesCount += 1;
    }
    return bytesCount;
}

/**
 * 判断是否为空
 * @param val 变量
 * @returns {boolean}
 */
function isNull(val) {
    if(val == null || val == "null" || val == undefined || val == "") {
        return true;
    }
    return false;
}

/**
 * 删除数组指定元素
 * @param arr 数组
 * @param val 索引
 */
function removeByValue(arr, val) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == val) {
            arr.splice(i, 1);
            break;
        }
    }
}

/**
 * 获取地址栏URL里的参数集
 */
function getParams(url) {
    // var url = location.search;
    var params = new Object();
    if(url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for(var i = 0; i < strs.length; i++) {
            params[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return params;
}

/**
 * 根据参数名获取地址栏URL里的参数
 */
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r != null) return unescape(r[2]);
    return null;
}

/**
 * @desc 将时间戳转换为YYYY-MM-DD格式
 * @access public
 * @param 时间戳
 * @return string
 */
function formatDate(now) {
    var d = new Date(now * 1000);
    var month = parseInt(d.getMonth()) + 1;
    var day = parseInt(d.getDate());
    if(month < 10) {
        month = "0" + month;
    }
    if(day < 10) {
        day = "0" + day;
    }
    return d.getFullYear() + "-" + month + "-" + day;
}

/**
 * @desc 将时间戳转换为YYYY-MM-DD HH:ii
 * @access public
 * @return string
 */
function formatDateTime(now) {
    var d = new Date(now * 1000);
    var hour = parseInt(d.getHours());
    var minute = parseInt(d.getMinutes());
    if(hour < 10) {
        hour = "0" + hour;
    }
    if(minute < 10) {
        minute = "0" + minute;
    }
    return formatDate(now) + " " + hour + ":" + minute;
}

/*动态加载js css*/
function jsorcss(type, url) {
    try {
        var s = "";
        var date = new Date();
        date = date.getMilliseconds();
        date = date.toString();
        if(type == 'css') {
            s = "<link rel='stylesheet' href=" + url + ".css?v=" + date + " media='all'/>"
            $(s).appendTo('head');
        } else if(type == 'js') {
            s = "<script type='text/javascript' src=" + url + ".js?v=" + date + "></script>";
            $(s).appendTo('body');
        }
    } catch(e) {
        console.log(e)
    }
}

/**
 * @desc 金额转换，保留2位小数并四舍五入
 * @author：qiurui
 * @param  num / string : 1000.59
 * @return string : 1,000.60
 */
function getMoneyFormat(number) {
    number = number + ''; //数字转换成字符串
    number = number.replace(/\,/g, ""); //将 , 转换为空
    //判断是否是数字
    if (isNaN(number) || number == "") {
        return "";
    }
    //四舍五入,保留2位
    number = Math.round(number * 100) / 100;
    //是否是负数
    if (number < 0) {
        return '-' + getFormatYuan(Math.floor(Math.abs(number) - 0) + '') + getFormatCents(Math.abs(number) - 0);
    } else {
        return getFormatYuan(Math.floor(number - 0) + '') + getFormatCents(number - 0);
    }
    //格式化整数
    function getFormatYuan(number) {
        //判断是否是0.几几
        if (number.length <= 3) {
            return (number == '' ? '0' : number);
        } else {
            var mod = number.length % 3; //求余
            //截取字符开头的数字
            var output = (mod == 0 ? '' : (number.substring(0, mod)));
            for (var i = 0; i < Math.floor(number.length / 3); i++) {
                //mod==0 && i==0 说明数字的长度被3整除；第一次循环的时候截取（0,3）位
                if ((mod == 0) && (i == 0)) {
                    output += number.substring(mod + 3 * i, mod + 3 * i + 3);
                } else {
                    output += ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
                }
            }
            return (output);
        }
    }
    //格式化小数
    function getFormatCents(amount) {
        amount = Math.round(((amount) - Math.floor(amount)) * 100);
        return (amount < 10 ? '.0' + amount : '.' + amount);
    }
}

//渲染数据
function setDatas(demo,data){
    var inputArr = demo.find('input');
    var imgArr = demo.find('img');
    var selectArr = demo.find('select');
    var textarea = demo.find('textarea');
    setArr(inputArr,data);
    setArr(imgArr,data,'');
    setArr(selectArr,data);
    setArr(textarea,data);
    form.render()

}

//遍历数组，填充数据
function setArr(arr,data,img){
    var ids = '';
    $.each(arr,function (index, item) {
        ids = $(this).attr('id');
        if(data.hasOwnProperty(ids)){
            if(img !== undefined){
                $(this).attr('src',data[ids] || '../../common/images/placeholder.png')
            }else{
                $(this).val(data[ids]);
            }
        }
    })
}

//弹出层分封装
//如果确定有回调 就传
var _index = 0;
function layerOpen(title,el,forName,pageCallback){
    TITLE[0] = title;
    layer.open({
        title: TITLE,
        type: 1,
        content: el, //这里content是一个DOM，注意：最好该元素要存放在body最外层，否则可能被其它的相对元素所影响
        area: AREA,
        shade:SHADE,
        btn:['确认','取消'],
        end: function (layero,index) {
            layer.close(index);
            emptyInput(el);
        },
        success:function (layero,index) {
            setForms(forName)
        },
        yes:function (index) {
            if(pageCallback == undefined){
                layer.close(index);
            }else{
                _index=index;
            }
        },
        btn1:function(){
            layer.close(index);
        },

    })
}
//取消冒泡
function stopPropagation(e) {
    if (e.stopPropagation)
        e.stopPropagation();
    else
        e.cancelBubble = true;
}


