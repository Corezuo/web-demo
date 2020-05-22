/**
 * ArrayBuffer 和 DataView 的编解码案例
 */

const headerLen = 2

// 编码
const msg = '{"id": 10, "name": "dazuo"}'
let textEncoder = new TextEncoder()
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
let decoder = new TextDecoder()
let body = decoder.decode(data.slice(headerLen, headerLen + bodyLen))
console.log(body)
