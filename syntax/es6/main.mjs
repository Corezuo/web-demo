// es6 模块
import fs from './fs';

console.log(fs.nickname);

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