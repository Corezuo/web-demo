// 1.加载模块（其实是加载该模块的`module.exports`属性）
var obj = require("./utils");
console.log(obj.name);
obj.getName();

// 2.加载模块，方式二
// var utils = require('./utils')
// console.log(utils);