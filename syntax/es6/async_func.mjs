/*
一、async 函数含义
ES2017 标准引入了 async 函数，使得异步操作变得更加方便。
async 函数是什么？一句话，它就是 Generator 函数的语法糖。

一比较就会发现，async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await，仅此而已。
async函数对 Generator 函数的改进，体现在以下四点。
(1).内置执行器。
Generator 函数的执行必须靠执行器，所以才有了co模块，而async函数自带执行器。也就是说，async函数的执行，与普通函数一模一样，只要一行。
```
asyncReadFile();
```
上面的代码调用了asyncReadFile函数，然后它就会自动执行，输出最后结果。这完全不像 Generator 函数，需要调用next方法，或者用co模块，才能真正执行，得到最后结果。

(2).更好的语义。
async和await，比起星号和yield，语义更清楚了。async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。

(3).更广的适用性。
co模块约定，yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，
但这时会自动转成立即 resolved 的 Promise 对象）。

(4)返回值是 Promise。
async函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便多了。你可以用then方法指定下一步的操作。
进一步说，async函数完全可以看作多个异步操作，包装成的一个 Promise 对象，而await命令就是内部then命令的语法糖。
*/

const asyncReadFile = async function () {
    const f1 = await readFile('/etc/fstab');
    const f2 = await readFile('/etc/shells');
    sleep();
    console.log(f1);
    console.log(f2);
};

function readFile(filename) {
    sleep();
    console.log("read file: ", filename);
    return filename;
}

function sleep () {
    // for (var i = 0; i < 10000000000; i++) {
    // }
}

/// 屏蔽调用
// asyncReadFile().then(function (val) {
//     console.log("调用成功！");
// })
// console.log("Done.")

console.log("////////////////////////////////////////\n");

// 2.基本用法
// async函数返回一个 Promise 对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。
async function getStockPriceByName(name) {
    const symbol = await getStockSymbol(name);
    const stockPrice = await getStockPrice(symbol);
    return stockPrice;
}

function getStockSymbol (name) {
    console.log("name: ", name);
    return "symbolName";
}

function getStockPrice(symbol) {
    console.log("symbol: ", symbol);
    return "stockPrice"
}

/// 屏蔽调用
// getStockPriceByName('goog').then(function (result) {
//     console.log("result: ", result);
// });
// console.log("done.");

console.log("////////////////////////////////////////\n");

// 示例：指定多少毫秒后输出一个值。
function timeout(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}
async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
}

/// 屏蔽调用
// asyncPrint('hello world', 2000);
// console.log("done.");

// async 函数有多种使用形式。
// 函数声明
async function foo1() {}

// 函数表达式
const foo2 = async function () {};

// 对象的方法
// let obj = { async foo() {} };
// obj.foo().then(...)

// Class 的方法
class Storage {
    constructor() {
        this.cachePromise = caches.open('avatars');
    }
  
    async getAvatar(name) {
        const cache = await this.cachePromise;
        return cache.match(`/avatars/${name}.jpg`);
    }
}
// const storage = new Storage();
// storage.getAvatar('jake').then(…);

// 箭头函数
const foo3 = async () => {};