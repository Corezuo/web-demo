/**
 * ArrayBuffer 和 DataView 的编解码案例
 */

const headerLen = 2

// 编码
const msg = '{"id": 10, "name": "dazuo"}'
// 返回一个新构造的TextEncoder，它将默认使用utf-8编码生成一个字节流。
let textEncoder = new TextEncoder()
// 返回一个包含utf-8编码文本的Uint8Array
let bodyBuf = textEncoder.encode(msg)
let headerBuf = new ArrayBuffer(headerLen)
let headerView = new DataView(headerBuf)
headerView.setInt16(0, bodyBuf.byteLength)

let u81 = new Uint8Array(headerBuf)
let u82 = new Uint8Array(bodyBuf)
let res = new Uint8Array(headerBuf.byteLength + bodyBuf.byteLength)
res.set(u81, 0)
res.set(u82, headerBuf.byteLength)
console.log(res.buffer)

// 解码
let data = res.buffer
let dataView = new DataView(data)
let bodyLen = dataView.getInt16(0)
console.log(bodyLen)  // 读取header，获取包体的长度
// 表示用于特定文本编码的解码器，例如 UTF-8，GBK 等。 默认为 'utf-8' 或 'utf8'，解码器采用字节流作为输入，并发出代码点流。
let decoder = new TextDecoder()
let body = decoder.decode(data.slice(headerLen, headerLen + bodyLen))
console.log(body)
