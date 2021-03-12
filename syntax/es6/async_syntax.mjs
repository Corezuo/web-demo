// async 语法

// 1.返回 Promise 对象
// async函数返回一个 Promise 对象。
// async函数内部return语句返回的值，会成为then方法回调函数的参数。
// 实现原理：https://es6.ruanyifeng.com/#docs/async#async-%E5%87%BD%E6%95%B0%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86
async function f() {
    return 'hello world';
}
/// 屏蔽执行
// f().then(v => console.log(v))

// Promise 对象的状态变化
// async函数返回的 Promise 对象，必须等到内部所有await命令后面的 Promise 对象执行完，才会发生状态改变，除非遇到return语句或者抛出错误。
// 也就是说，只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数。
// async函数内部抛出错误，会导致返回的 Promise 对象变为reject状态。抛出的错误对象会被catch方法回调函数接收到。
async function f2() {
    // throw new Error('出错了');
    await console.log("hello f2");
}
/// 屏蔽执行
// f2().then(
//     v => console.log(v),
//     e => console.log(e)
// );

// await 命令
// 1.正常情况下，await命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值。
// 2.await命令后面的 Promise 对象如果变为reject状态，则reject的参数会被catch方法的回调函数接收到。
//   任何一个await语句后面的 Promise 对象变为reject状态，那么整个async函数都会中断执行。
async function f3 () {
    // var val = await "hello f2";
    // return val;

    let result = await '11111'
    console.log('result: ', result) // 输出: 11111
    result = await Promise.resolve('22222');
    console.log('result: ', result) // 输出：22222
    await Promise.reject('错误');
    console.log("Done.");   // 不会执行
}
/// 屏蔽执行
f3().then(
    v => console.log(v),
    e => console.log(e)
)

// 3.await放在try...catch结构
async function f4 () {
    /// 方式一
    // try {
    //     await Promise.reject("出错了！");
    // } catch(e) {
    //     console.log("inner: ", e);
    // }

    /// 方式二
    await Promise.reject("出错了！").catch(function (reason) {
        console.log("inner: ", reason);
    });

    return await Promise.resolve("success");
}
f4().then(
    v => console.log(v),
    e => console.log(e)
)
