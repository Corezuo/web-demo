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

console.log("/////////////////////////// Set /////////////////////");

// ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
const set = new Set();
set.add("dazuo");
set.add(22);
set.add([2, 3]);
console.log("set: ", set);
console.log("set size: ", set.size);
console.log("set has: ", set.has("dazuo"));

const set2 = new Set([1, 2, "dazuo"]);
console.log("set2: ", set2);

console.log("/////////////////////////// Promise /////////////////////");

// Promise 异步编程；就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息
const promise = new Promise(function(resolve, reject) {
    console.log("执行Promise！");

    // 将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
    // resolve("value");

    // 将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。
    // reject("error");

    throw new Error('test');
});

// Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。
promise.then(function(value) {
  console.log("success value：", value);
}, function(error) {
  // console.log("failure value：", error);
});

// 发生错误时的回调函数
promise.catch(function(error) {
  console.log(error);
});

// 不管promise最后的状态，在执行完then或catch指定的回调函数以后，都会执行finally方法指定的回调函数。
promise.finally(function () {
  console.log("promise finally!");
})