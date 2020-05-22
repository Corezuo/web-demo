/**
 * TextDecoder 和 TextEncoder编解码器
 */

const encoder = new TextEncoder() // 返回一个新构造的TextEncoder，它将默认使用utf-8编码生成一个字节流。
const u8arr = encoder.encode('0123') // 返回一个包含utf-8编码文本的Uint8Array
console.log(u8arr)  // output: Uint8Array(4) [ 48, 49, 50, 51 ]

const decoder = new TextDecoder() // 表示用于特定文本编码的解码器，例如 UTF-8，ISO-8859-2，KOI8-R，GBK 等。 默认为 'utf-8' 或 'utf8'，解码器采用字节流作为输入，并发出代码点流。
console.log(decoder.decode(u8arr))  // output: 0123
