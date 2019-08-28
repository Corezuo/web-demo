// fs 模块
var nickname = "dazuo";

function getName () {
    console.log("hello getName");
}

// 导出一个变量
export var age = 22;

export function setName () {
    console.log("this setName");
}

// // 导出一组变量
// export {
//     // 别名
//     nickname as name,
//     getName
// }

// 默认导出
export default {
    nickname, 
    getName
}