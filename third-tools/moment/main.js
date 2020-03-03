// JavaScript 日期处理类库，文档：http://momentjs.cn/docs/
var moment = require('moment') 

// 当前时间，等同于调用 moment(new Date())
var now = moment();
console.log("now: ", now);

// 解析日期
var date = moment('01/12/2016', 'DD/MM/YYYY', true);
console.log("year: ", date.year());
console.log("输出自 Unix 纪元以来的毫秒数: ", date.valueOf());
console.log("输出 Unix 时间戳: ", date.unix());
console.log("Date 对象的副本: ", date.toDate());
console.log("date: ", date.isValid());

// 解析日期
// 从 2.3.0 版本开始，可以为最后一个参数指定一个布尔值，以使 Moment 使用严格的解析。 严格的解析要求格式和输入完全匹配，包括分隔符。
var date = moment('01/12/2016', 'DD/MM/YYYY', true).format("YYYY-MM-DD HH:mm:ss");
console.log(date);

// 时间格式化
var date2 = moment().format("YYYY-MM-DD HH:mm:ss");
console.log("date2: ", date2);

// 从 Unix 时间戳（自 Unix 纪元以来的秒数）创建 moment
var date3 = moment.unix(1318781876).format("YYYY-MM-DD HH:mm:ss");
console.log("date3: ", date3);