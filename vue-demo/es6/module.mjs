import fs from './fs';

console.log(fs.nickname);

// node.js 8以上 以上已经原生支持es6语法书写代码了。
// 需要做如下两步：
//   1.把原来的 *.js改为*.mjs
//   2.需要增加node运行参数：node --experimental-modules module.mjs

/// 1.选择性的导入
// import {age, setName} from "./fs";

// console.log(age);
// setName();

/// 2.全部导入
// import * as fs from './fs';

// console.log(fs.age);

/// 3.导入export default 不需要大括号
// import fs from './fs.mjs';

// console.log(fs.nickname);
// fs.getName();