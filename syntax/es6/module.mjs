// 1.选择性的导入
// import {age, setName} from "./fs";
// console.log(age);
// setName();

// 2.全部导入
// import * as obj from './fs';
// console.log(obj.nickname);
// console.log(obj.name);
// obj.getName();

// 3.导入export default 不需要大括号
// import func from './fs'
// func()

// 4.导入export default
// import obj from './fs'
// console.log(obj.nickname)
// obj.getName()

/// 5.同时导入默认方法，和其它方法
import obj, {age} from './fs';
console.log(obj)
console.log(age)