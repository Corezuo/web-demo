let http = require('http')
let nock = require('nock')

// https://github.com/nock/nock HTTP服务器模拟和期望库
function start() {
    nock('http://www.baidu.com').get('/').reply(200, {
        "username": 'mars'
    })
    http.get('http://www.baidu.com', (res) => {
        const { statusCode } = res
        if (statusCode === 200) {
            res.on('data', (data) => {
                console.log('rsp: ', data.toString())
            })
        }
    })
}

start()
