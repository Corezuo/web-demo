## socket.io 是 websocket 的超集，支持room

疑问：文件是如何加载的？
```js
<script src="/socket.io/socket.io.js"></script>
```

答：不是从本地node_modules中加载的。在 server.js 中 `var io = require('socket.io')(http);` 这里加载的。