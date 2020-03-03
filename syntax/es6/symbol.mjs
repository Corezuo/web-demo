/*
1.概述
ES5 的对象属性名都是字符串，这容易造成属性名的冲突。比如，你使用了一个他人提供的对象，但又想为这个对象添加新的方法（mixin 模式），
新方法的名字就有可能与现有方法产生冲突。如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。
这就是 ES6 引入Symbol的原因。

ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、
布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。

Symbol 值通过Symbol函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。
凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。
*/
let s = Symbol();
console.log(typeof s === 'symbol'); // true

// Symbol函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。
let s1 = Symbol('foo');
console.log(s1.toString() === 'Symbol(foo)');   // true

// 如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值。
const obj = {
    toString() {
      return 'abc';
    }
};
const sym = Symbol(obj);
console.log(sym);   // Symbol(abc)

// Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的。
let s2 = Symbol('foo');
let s3 = Symbol('foo');
console.log(s2 === s3); // false

// Symbol 值不能与其他类型的值进行运算，会报错。
let sym2 = Symbol('My symbol');
// "your symbol is " + sym2

// 但是，Symbol 值可以显式转为字符串
let sym3 = Symbol('My symbol');

console.log(String(sym3)) // 'Symbol(My symbol)'
console.log(sym3.toString()) // 'Symbol(My symbol)'

// Symbol 值也可以转为布尔值，但是不能转为数值。
let sym4 = Symbol();
console.log(Boolean(sym4)); // true


// 2.Symbol.prototype.description
// 创建 Symbol 的时候，可以添加一个描述。
const sym5 = Symbol('foo');
// 上面代码中，sym的描述就是字符串foo。
// 但是，读取这个描述需要将 Symbol 显式转为字符串，即下面的写法。
String(sym5) // "Symbol(foo)"
sym5.toString() // "Symbol(foo)"

// 3.作为属性名的 Symbol
// 由于每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性。
// 这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。
let mySymbol = Symbol("my");
// 第一种写法
let a1 = {};
a1[mySymbol] = 'Hello!';

// 第二种写法
let a2 = {
  [mySymbol]: 'Hello!'
};

// 第三种写法
let a3 = {};
Object.defineProperty(a3, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
console.log(a3[mySymbol]) // "Hello!"

// 注意，Symbol 值作为对象属性名时，不能用点运算符。
// 因为点运算符后面总是字符串，所以不会读取mySymbol作为标识名所指代的那个值，导致a的属性名实际上是一个字符串，而不是一个 Symbol 值。
console.log(a3.mySymbol); // undefined

// 同理，在对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中。
let a4 = {
  [mySymbol]: function (arg) {
      console.log(arg);
  },
  name: "dazuo",
  age: 24
};
a4[mySymbol]("a4[mySymbol] ...");

// 5.属性名的遍历
// Symbol 作为属性名，遍历对象的时候，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。
// 但是，它也不是私有属性，有一个Object.getOwnPropertySymbols()方法，可以获取指定对象的所有 Symbol 属性名。该方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。
for (item in a4) {
    console.log("item: ", item);
}

const objectSymbols = Object.getOwnPropertySymbols(a4);
console.log(objectSymbols);
console.log(objectSymbols[0]);
a4[objectSymbols[0]]("objectSymbols ...");

// 6.Symbol.for()，Symbol.keyFor() 
// 有时，我们希望重新使用同一个 Symbol 值，Symbol.for()方法可以做到这一点。它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。
// 如果有，就返回这个 Symbol 值，否则就新建一个以该字符串为名称的 Symbol 值，并将其注册到全局。

// Symbol.for()不会每次调用就返回一个新的 Symbol 类型的值，而是会先检查给定的key是否已经存在，如果不存在才会新建一个值。
let s61 = Symbol.for('foo');
let s62 = Symbol.for('foo');
let s63 = Symbol.for('foo2');

console.log(s61 === s62) // true
console.log(s61 === s63) // false

// Symbol.keyFor()方法返回一个已登记的 Symbol 类型值的key。
let s64 = Symbol.for('foo');
console.log(Symbol.keyFor(s64) === 'foo') // "foo"

// 变量s65属于未登记的 Symbol 值，所以返回undefined。
let s65 = Symbol("foo");
console.log(Symbol.keyFor(s65)) // undefined

// 8.内置的 Symbol 值
// https://es6.ruanyifeng.com/#docs/symbol
