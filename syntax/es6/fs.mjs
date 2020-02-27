// 1.选择性的导出
// export var age = 22;

// export function setName () {
//     console.log("this setName");
// }

// 2.导出一组变量
// var nickname = "dazuo";
// function getName () {
//     console.log("hello getName");
// }
// export {
//     nickname as name,   // 别名
//     getName
// }

// 3.默认导出-函数
// export default function foo() {
//     console.log("foo func");    
// }

// 4.默认导出-对象
// var nickname = "dazuo"
// function getName() {
//     console.log("this is getName");
// }
// export default {
//     nickname, 
//     getName
// }

// 5.同时导出 默认方法和其它方法（顺序无关）
var nickname = "dazuo"
export default {
    nickname
}

export var age = 20