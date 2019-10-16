const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    // webpack配置
    configureWebpack: {
        name: "Tfkafka-dashboard",
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    }
}