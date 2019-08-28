## Vue项目

### 使用Vue-cli

**1.创建项目**

```
$ vue create hello-world
$ vue create --help
```

**2.启动项目**

```
$ npm run serve
```

**3.安装插件**

```
$ vue add eslint
```

**4.运行测试**

```
npm run test
```

### 构建单页应用

```js
// Vue根实例
new Vue({
  render: h => h(App),
}).$mount('#app')

// ES5写法，闭包
new Vue({
  render: function (createElement) {
      return createElement(App)
  }
}).$mount('#app');
```