const path = require('path')
const defaultSettings = require('./src/settings')

// page title
const name = defaultSettings.title || 'zxcity-APM' 

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    // webpack配置
    configureWebpack: {
        name: name,
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    }
}