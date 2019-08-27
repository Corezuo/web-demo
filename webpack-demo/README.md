## Webpack 的使用

中文文档：https://www.webpackjs.com/guides/lazy-loading/#%E7%A4%BA%E4%BE%8B

### 1.编译项目

```
# Node 8.2+ 版本提供的 npx 命令
$ npx webpack

# 使用配置文件
$ npx webpack --config webpack.config.js

# 使用NPM脚本
$ npm run build --config webpack.config.js
```

webpack.config.js

```js
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
```

### 2.管理资源

// TODO: 
