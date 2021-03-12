// Generator 函数是 ES6 提供的一种异步编程解决方案
// Generator 函数是一个普通函数，但是有两个特征。
// 一是，function关键字与函数名之间有一个星号；
// 二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）
function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

// Generator 函数的调用方法与普通函数一样，也是在函数名后面加上一对圆括号。不同的是，调用 Generator 函数后，该函数并不执行，
// 返回的也不是函数运行结果，而是一个指向内部状态的指针对象，也就是上一章介绍的遍历器对象（Iterator Object）。
let hw = helloWorldGenerator();

// 下一步，必须调用遍历器对象的next方法，使得指针移向下一个状态。也就是说，每次调用next方法，内部指针就从函数头部或上一次停下
// 来的地方开始执行，直到遇到下一个yield表达式（或return语句）为止，返回的值就是当前yield表达式的值。
// 换言之，Generator 函数是分段执行的，yield表达式是暂停执行的标记，而next方法可以恢复执行。
console.log(hw.next()); // { value: 'hello', done: false }
console.log(hw.next()); // { value: 'world', done: false }
console.log(hw.next()); // { value: 'ending', done: true }
console.log(hw.next()); // { value: undefined, done: true }

// yield 表达式
// 遍历器对象的next方法的运行逻辑如下。
// （1）遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。
// （2）下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式。
// （3）如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。
// （4）如果该函数没有return语句，则返回的对象的value属性值为undefined。

// Generator 函数可以不用yield表达式，这时就变成了一个单纯的暂缓执行函数
// 函数f是一个 Generator 函数，就变成只有调用next方法时，函数f才会执行。
function* f() {
    console.log('执行了！')
}
let generator = f();
setTimeout(function () {
    generator.next()
}, 2000);

// next 方法的参数
// yield表达式本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。
function* f2() {
    console.log("first one");
    let a = yield "hello"
    console.log("second:", a); // second: undefined
    let b = yield "world"
    console.log("three:", b);  // three: true
}
let g = f2();
console.log("f2: ", g.next());  // { value: 'hello', done: false }
setTimeout(function () {
    console.log("f2: ", g.next()); // { value: 'world', done: false }
}, 2000);
setTimeout(function () {
    console.log("f2: ", g.next(true));  // { value: undefined, done: true }
}, 4000);

// Generator.prototype.throw()
// Generator 函数返回的遍历器对象，都有一个throw方法，可以在函数体外抛出错误，然后在 Generator 函数体内捕获。
let g3 = function* () {
    try {
        yield;
    } catch (e) {
        console.log('内部捕获', e);
    }
};
let i3 = g3();
i3.next();
try {
    i3.throw('a');
    i3.throw('b');
} catch (e) {
    console.log('外部捕获', e);
}

// Generator.prototype.return()
// Generator 函数返回的遍历器对象，还有一个return方法，可以返回给定的值，并且终结遍历 Generator 函数。
function* gen() {
    yield 1;
    yield 2;
    yield 3;
}
let g4 = gen();
console.log(g4.next());        // { value: 1, done: false }
console.log(g4.return('foo')); // { value: "foo", done: true }
console.log(g4.next());       // { value: undefined, done: true }

/*
Generator 函数的异步应用
JavaScript 语言的执行环境是“单线程”的，异步编程对 JavaScript 语言太重要。

> 异步
所谓"异步"，简单说就是一个任务不是连续完成的，可以理解成该任务被人为分成两段，先执行第一段，然后转而执行其他任务，等做好了准备，再回过头执行第二段。
比如，有一个任务是读取文件进行处理，任务的第一段是向操作系统发出请求，要求读取文件。然后，程序执行其他任务，等到操作系统返回文件，
再接着执行任务的第二段（处理文件）。这种不连续的执行，就叫做异步。

> 回调函数
JavaScript 语言对异步编程的实现，就是回调函数。所谓回调函数，就是把任务的第二段单独写在一个函数里面，等到重新执行这个任务的时候，就直接调用这个函数。
回调函数的英语名字callback，直译过来就是"重新调用"。

> Promise
Promise 的写法只是回调函数的改进，使用then方法以后，异步任务的两段执行看得更清楚了，除此以外，并无新意。
Promise 的最大问题是代码冗余，原来的任务被 Promise 包装了一下，不管什么操作，一眼看去都是一堆then，原来的语义变得很不清楚。

> Generator 函数
传统的编程语言，早有异步编程的解决方案（其实是多任务的解决方案）。其中有一种叫做"协程"（coroutine），意思是多个线程互相协作，完成异步任务。
协程有点像函数，又有点像线程。它的运行流程大致如下。
第一步，协程A开始执行。
第二步，协程A执行到一半，进入暂停，执行权转移到协程B。
第三步，（一段时间后）协程B交还执行权。
第四步，协程A恢复执行。

Generator 函数可以暂停执行和恢复执行，这是它能封装异步任务的根本原因。除此之外，它还有两个特性，使它可以作为异步编程的完整解决方案：函数体内外的数据交换和错误处理机制。
next()返回值的 value 属性，是 Generator 函数向外输出数据；next()还可以接受参数，向 Generator 函数体内输入数据。

> Thunk 函数
Thunk 函数是自动执行 Generator 函数的一种方法。
编译器的“传名调用”实现，往往是将参数放到一个临时函数之中，再将这个临时函数传入函数体。这个临时函数就叫做 Thunk 函数。
*/
