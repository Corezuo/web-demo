const Long = require('long');

// 使用long.js处理uint64数值
// 整数的安全范围：Number.MAX_SAFE_INTEGER = 9007199254740991

const longVal = Long.fromNumber(9223372036854775807, false);
console.log(Long.isLong(longVal));
console.log(longVal.toString());

// 将String类型转long类型
const longVal2 = Long.fromString("9223372036854775807", true);
console.log(longVal2.toString());
