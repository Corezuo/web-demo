// Promise 异步编程；就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息
const instP = new Promise(function(resolve, reject) {
    console.log("执行Promise！");

    // 将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
    // resolve("value");

    // 将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。
    // reject("error");
    
    throw new Error('test');
});

// Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。
instP.then(function(value) {
    console.log("success value：", value);
}).catch(function (error) {
    // 发生错误时的回调函数
    console.log("catch eror: ", error);
}).finally(function () {
    // 不管promise最后的状态，在执行完then或catch指定的回调函数以后，都会执行finally方法指定的回调函数。
    console.log("promise finally!");
});

// Promise 另一种写法
// instP.then(function (value) {
//     console.log("success value: ", value);
// }, function (reason) {
//     console.log("failure reason: ", reason);
// });