// es6 语法

// const 赋值常量，常量值不可变
const a = 1;
// a = 2;

// let关键字
// 1.作用域只在所在的代码块内有效，如函数内部。
// 2.let不允许在相同作用域中，重复声明同一变量。
function func () {
    let b = 30;
    console.log(b);
}
func();

var obj = {
    name: "dazuo",
    // es6
    get() {
        console.log("hello get");
    },
    // es5
    set: function () {
        console.log("hello get");
    }
}

// es5
var sum = function (i){
    console.log("=====> i: " + i);
}
sum(111);

// es6箭头函数
var sum2 = (i) => {
    console.log("====> i2：" + i);
}
sum2(22);

// for...in
var obj = {
    name: "dazuo",
    age: 22
}
for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        const element = obj[key];
        console.log("key: ", key);
        console.log("element: ", element);
    }
}