## nodejs
Node js是一个Javascript运行环境。通过对高性能V8引擎的封装，并通过一系列优化的API类库，使得V8在非浏览器环境下运行得更好。

> 标准输出

1.控制台进行标准输出流的输出：console.log("hello world");
2.控制台进行标准错误输出流的输出： console.error("this is error");
3.输出重定向：

```javascript
$ node main.js	            // 执行文件，向屏幕输出。
$ node main.js > info.log   // 1 代表重定向标准输出流
$ node main.js > error.log  // 2 代表重定向标准错误输出流。
```

> 预定义变量
`__filename`：获取当前模块文件的带有完整绝对路径的文件名。
`__dirname`：获取当前模块文件所在目录的完整绝对路径。
 
> 模块（module）
1.Node应用由模块组成，采用`CommonJS 模块规范`。每一个`js`文件就是一个模块，有自己的作用域，对其他文件不可见。
2.这些模块通过彼此间的依赖和引入可以组合更强大的模块。
3.安装nodejs，同时会安装npm包。通过这个工具可以向项目中引入各种各样的模块。（推荐使用yarn替代npm）
4.一般将代码合理拆分到不同的JS文件中，每一个文件就是一个模块，而文件路径就是模块名。

> 包（package）
1.可以把由多个子模块组成的大模块称做包，并把所有子模块放在同一个目录里。 
2.在组成一个包的所有子模块中，需要有一个入口模块，入口模块的导出对象被作为包的导出对象。


## [CommonJS语法](http://javascript.ruanyifeng.com/nodejs/module.html#)

### 1.概述
Node 应用由模块组成，采用 CommonJS 模块规范。
每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。

CommonJS规范规定，每个模块内部，`module`变量代表当前模块。这个变量是一个对象，它的`exports`属性（即`module.exports`）是对外的接口。
加载某个模块，其实是加载该模块的`module.exports`属性。

```javascript
var x = 5;
var addX = function (value) {
  return value + x;
};
module.exports.x = x;
module.exports.addX = addX;
```
上面代码通过`module.exports`输出变量`x`和函数`addX`

`require`方法用于加载模块。

```javascript
var example = require('./example.js');

console.log(example.x); // 5
console.log(example.addX(1)); // 6
```

CommonJS模块的特点如下: 

1. 所有代码都运行在模块作用域，不会污染全局作用域。
2. 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。
3. 模块加载的顺序，按照其在代码中出现的顺序。

### 2.module对象
Node内部提供一个`Module`构建函数。所有模块都是`Module`的实例。

```javascript
function Module(id, parent) {
  this.id = id;
  this.exports = {};
  this.parent = parent;
  // ...
```

每个模块内部，都有一个`module`对象，代表当前模块。它有以下属性。

```javascript
module.id 模块的识别符，通常是带有绝对路径的模块文件名。
module.filename 模块的文件名，带有绝对路径。
module.loaded 返回一个布尔值，表示模块是否已经完成加载。
module.parent 返回一个对象，表示调用该模块的模块。
module.children 返回一个数组，表示该模块要用到的其他模块。
module.exports 表示模块对外输出的值。
```

**2.1 module.exports属性**
`module.exports`属性表示当前模块对外输出的接口，其他文件加载该模块，实际上就是读取`module.exports`变量。

**2.2 exports变量**
为了方便，Node为每个模块提供一个`exports`变量，指向`module.exports`。这等同在每个模块头部，有一行这样的命令。

```javascript
var exports = module.exports;
```

造成的结果是，在对外输出模块接口时，可以向exports对象添加方法。

```javascript
exports.area = function (r) {
  return Math.PI * r * r;
};
```

注意，不能直接将`exports`变量指向一个值，因为这样等于切断了`exports`与`module.exports`的联系。

```javascript
exports = function(x) {console.log(x)};
```
上面这样的写法是无效的，因为`exports`不再指向`module.exports`了。

### 3.require命令

**3.1 基本用法**
Node使用CommonJS模块规范，内置的`require命令`用于加载模块文件。
`require命令`的基本功能是，读入并执行一个JavaScript文件，然后返回该`模块的exports对象`。如果没有发现指定模块，会报错。

如果模块输出的是一个函数，那就不能定义在exports对象上面，而要定义在module.exports变量上面。

```javascript
module.exports = function () {
  console.log("hello world")
}
require('./example2.js')()
```
上面代码中，require命令调用自身，等于是执行module.exports，因此会输出 hello world。

**3.2 加载规则**
`require`命令用于加载文件，后缀名默认为`.js`。

```javascript
var foo = require('foo');
//  等同于
var foo = require('foo.js');
```

根据参数的不同格式，`require`命令去不同路径寻找模块文件。

（1）如果参数字符串以“/”开头，则表示加载的是一个位于绝对路径的模块文件。比如，`require('/home/marco/foo.js')`将加载`/home/marco/foo.js`。

（2）如果参数字符串以“./”开头，则表示加载的是一个位于相对路径（跟当前执行脚本的位置相比）的模块文件。比如，`require('./circle')`将加载当前脚本
同一目录的`circle.js`。

（3）如果参数字符串不以“./“或”/“开头，则表示加载的是一个默认提供的核心模块（位于Node的系统安装目录中），或者一个位于各级`node_modules目录`的
已安装模块（全局安装或局部安装）。

举例来说，脚本`/home/user/projects/foo.js`执行了`require('bar.js')`命令，Node会依次搜索以下文件。

```
/usr/local/lib/node/bar.js
/home/user/projects/node_modules/bar.js
/home/user/node_modules/bar.js
/home/node_modules/bar.js
/node_modules/bar.js
```

（4）如果参数字符串不以“./“或”/“开头，而且是一个路径，比如`require('example-module/path/to/file')`，则将先找到`example-module`的位置，
然后再以它为参数，找到后续路径。

（5）如果指定的模块文件没有发现，Node会尝试为文件名添加`.js、.json、.node`后，再去搜索。`.js`件会以文本格式的JavaScript脚本文件解析，`.json`
文件会以JSON格式的文本文件解析，`.node`文件会以编译后的二进制文件解析。

（6）如果想得到`require`命令加载的确切文件名，使用`require.resolve()`方法。

**3.3 目录的加载规则**
通常，我们会把相关的文件会放在一个目录里面，便于组织。这时，最好为该目录设置一个入口文件，让`require`方法可以通过这个入口文件，加载整个目录。

**3.4 模块的缓存**
第一次加载某个模块时，Node会缓存该模块。以后再加载该模块，就直接从缓存取出该模块的`module.exports`属性。

```javascript
require('./example.js');
require('./example.js').message = "hello";
require('./example.js').message
// "hello"
```
上面代码中，连续三次使用`require`命令，加载同一个模块。第二次加载的时候，为输出的对象添加了一个`message`属性。但是第三次加载的时候，这个`message`
属性依然存在，这就证明`require`命令并没有重新加载模块文件，而是输出了缓存。

如果想要多次执行某个模块，可以让该模块输出一个函数，然后每次`require`这个模块的时候，重新执行一下输出的函数。

所有缓存的模块保存在`require.cache`之中，如果想删除模块的缓存，可以像下面这样写。

```javascript
// 删除指定模块的缓存
delete require.cache[moduleName];

// 删除所有模块的缓存
Object.keys(require.cache).forEach(function(key) {
  delete require.cache[key];
})
```
注意，缓存是根据绝对路径识别模块的，如果同样的模块名，但是保存在不同的路径，require命令还是会重新加载该模块。


## [es6 语法](http://es6.ruanyifeng.com/#docs/set-map)

### 概述

1.ECMAScript是一种新的javascript规范，最新标准简称ES6/ES2015
2.ECMAScript和 javascript 的关系是，前者是后者的规格，后者是前者的实现。
3.ES6暂时在很多浏览器上不能使用，目前浏览器支持的是ES5。（需要转换为ES5）

**let关键字**
语法：let a = 3;
定义：
    1.作用域只在所在的代码块内有效，如函数内部。
    2.let不允许在相同作用域中，重复声明同一变量。
示例：
    for(let i = 3; i< 4; i ++)	// 变量i只在本轮循环中有效，每一次循环变量都是重新声明。

**const关键字**
定义：声明一个常量，常量值不可改变。
语法：const PI = 123;

**函数**
/*ES5*/ 
get:function (){
    console.log("this is get");
} 
/*ES6*/
get (){
    console.log("this is get");
}

**函数参数的默认值**
1.在ES6之前，不能直接为函数的参数指定默认值。
2.ES6允许为函数的参数设置默认值，即直接写在参数定义的后面。
3.在函数中，参数变量如果是默认声明的，就不能用let 和 const 再次声明。
示例：
function (x,y = 5 ){
    console.log(y);
}

**箭头函数**
语法：ES6允许使用箭头（ => ）定义函数
其中：函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
示例：
var sum = function (i){	return i+1;}	// ES5
var f = (i) => i+1;				// ES6
var f = (i) => {i++;return i;}		// 如果结构比较复杂，用{}包起来

**面向对象**
1.class关键字定义类，取代需要 prototype 的操作。
2.构造函数：constructor 
3.使用extends实现继承
4.实例化，直接对类使用new命令。

**ES6模块**
1.使用import取代require。使用export取代module.exports。
2.CommonJS模块就是对象，ES6模块不是对象，而是通过export命令指定输出代码，再通过import命令输入（即加载），输入指定的变量和方法。
3.一个模块就是一个单独的文件，该文件内部所有的变量，需要使用export输出。
4.ES6的模块自动采用了严格模式，主要有以下限制：
    1）变量必须声明后再使用
    2）函数的参数不能有同名属性，否则报错
    3）不能使用with语句
    4）不能对只读属性赋值，否则报错
    5）不能使用前缀 0 表示八进制数，否则报错
    6）禁止this指向全局对象
    7）增加了保留字（比如protected、static和interface）

**2.export命令**

模块功能主要由两个命令构成：`export`和`import`。`export`命令用于规定模块的对外接口，`import`命令用于输入其他模块提供的功能。

一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用`export`关键字输出该变量。
下面是一个 JS 文件，里面使用`export`命令输出变量。

```javascript
// profile.js
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;
```
上面代码是`profile.js`文件，保存了用户信息。ES6 将其视为一个模块，里面用`export`命令对外部输出了三个变量。

`export`的写法，除了像上面这样，还有另外一种。

```javascript
// profile.js
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export { firstName, lastName, year };
```

`export`命令除了输出变量，还可以输出函数或类（class）。

```javascript
export function multiply(x, y) {
  return x * y;
};
```
上面代码对外输出一个函数`multiply`。

通常情况下，`export`输出的变量就是本来的名字，但是可以使用`as`关键字重命名。

```javascript
var nickname = "dazuo"
function getName() { ... }
export {
  nickname as name,
  getName
};
```

**3.import命令**

使用`export`命令定义了模块的对外接口以后，其他 JS 文件就可以通过`import`命令加载这个模块。

```javascript
// main.js
import { firstName, lastName, year } from './profile.js';

function setName(element) {
  element.textContent = firstName + ' ' + lastName;
}
```
上面代码的`import`命令，用于加载`profile.js`文件，并从中输入变量。`import`命令接受一对大括号，里面指定要从其他模块导入的变量名。
大括号里面的变量名，必须与被导入模块（`profile.js`）对外接口的名称相同。

如果想为输入的变量重新取一个名字，`import`命令要使用`as`关键字，将输入的变量重命名。

```javascript
import { lastName as surname } from './profile.js';
```

`import`命令输入的变量都是只读的，因为它的本质是输入接口。也就是说，不允许在加载模块的脚本里面，改写接口。

```javascript
import {a} from './xxx.js'

a = {}; // Syntax Error : 'a' is read-only;
```

上面代码中，脚本加载了变量`a`，对其重新赋值就会报错，因为`a`是一个只读的接口。但是，如果`a`是一个对象，改写`a`的属性是允许的。

```javascript
import {a} from './xxx.js'

a.foo = 'hello'; // 合法操作
```

上面代码中，`a`的属性可以成功改写，并且其他模块也可以读到改写后的值。`不过，这种写法很难查错，建议凡是输入的变量，都当作完全只读，不要轻易改变它的属性`。

`import`后面的`from`指定模块文件的位置，可以是相对路径，也可以是绝对路径，`.js`后缀可以省略。如果只是模块名，不带有路径，那么必须有配置文件，
告诉 JavaScript 引擎该模块的位置。

```javascript
import {myMethod} from 'util';
```
上面代码中，`util`是模块文件名，由于不带有路径，必须通过配置，告诉引擎怎么取到这个模块。

如果多次重复执行同一句`import`语句，那么只会执行一次，而不会执行多次。

```javascript
import 'lodash';
import 'lodash';
```
上面代码加载了两次`lodash`，但是只会执行一次。

```javascript
import { foo } from 'my_module';
import { bar } from 'my_module';

// 等同于
import { foo, bar } from 'my_module';
```

上面代码中，虽然`foo`和`bar`在两个语句中加载，但是它们对应的是同一个`my_module`实例。也就是说，`import语句`是 Singleton 模式。

**4.export default命令**

从前面的例子可以看出，使用`import`命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载。但是，用户肯定希望快速上手，未必愿意阅读文档，
去了解模块有哪些属性和方法。

为了给用户提供方便，让他们不用阅读文档就能加载模块，就要用到`export default`命令，为模块指定默认输出。

```javascript
// export-default.js
export default function () {
  console.log('foo');
}
```

上面代码是一个模块文件`export-default.js`，它的默认输出是一个函数。

其他模块加载该模块时，`import`命令可以为该匿名函数指定任意名字。

```javascript
// import-default.js
import customName from './export-default';
customName(); // 'foo'
```

上面代码的`import`命令，可以用任意名称指向`export-default.js`输出的方法，这时就不需要知道原模块输出的函数名。需要注意的是，这时`import`命令后面，不使用大括号。

`export default`命令用在非匿名函数前，也是可以的。

```javascript
// export-default.js
export default function foo() {
  console.log('foo');
}

// 或者写成
function foo() {
  console.log('foo');
}

export default foo;
```
上面代码中，`foo`函数的函数名`foo`，在模块外部是无效的。加载的时候，视同匿名函数加载。

`export default`命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此`export default`命令只能使用一次。所以，`import`命令后面才不用加大括号，
因为只可能唯一对应`export default`命令。

本质上，`export default`就是输出一个叫做`default`的变量或方法，然后系统允许你为它取任意名字。

正是因为`export default`命令其实只是输出一个叫做`default`的变量，所以它后面不能跟变量声明语句。

```javascript
// 正确
export var a = 1;

// 正确
var a = 1;
export default a;

// 错误
export default var a = 1;
```
上面代码中，`export default a`的含义是将变量`a`的值赋给变量`default`。所以，最后一种写法会报错。

同样地，因为`export default`命令的本质是将后面的值，赋给`default`变量，所以可以直接将一个值写在`export default`之后。

```javascript
// 正确
export default 42;

// 报错
export 42;
```

如果想在一条`import`语句中，同时输入默认方法和其他接口，可以写成下面这样。

```javascript
import _, { each, forEach } from 'lodash';
```

**Node支持es6**
node.js 8以上 以上已经原生支持es6语法书写代码了。需要做如下两步：
- 1.把原来的 *.js改为*.mjs
- 2.需要增加node运行参数：node --experimental-modules module.mjs
