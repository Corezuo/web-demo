## nodejs

Node 应用由模块组成，采用 CommonJS 模块规范。

### es6 语法

参考文档：http://es6.ruanyifeng.com/#docs/set-map

node.js 8以上 以上已经原生支持es6语法书写代码了。需要做如下两步：

- 1.把原来的 *.js改为*.mjs
- 2.需要增加node运行参数：node --experimental-modules module.mjs

### CommonJs 语法

参考文档：http://javascript.ruanyifeng.com/nodejs/module.html#

每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。

require() 默认从node_module文件夹中找到