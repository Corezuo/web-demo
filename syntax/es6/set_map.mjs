/*
ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
Set本身是一个构造函数，用来生成 Set 数据结构。

JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。
为了解决这个问题，ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
*/

const s = new Set();
s.add("dazuo");
s.add("age");
s.add(24);
s.add(24);
s.delete("age");
console.log("s size = ", s.size);
console.log(s);
console.log(s.has(24));
// s.clear();
console.log("///////////////////////////////\n")

// 遍历Set
for (let item of s) {
    console.log("item = ", item);
}
s.forEach(function (item) {
    console.log("forEach item = ", item);    
})
console.log("///////////////////////////////\n")

// 遍历数组
tmpArr = [1, 3, 6, 8, 10, 12];
tmpArr.forEach(function (value, key) {
    console.log(key, '-', value);
})
tmpArr.forEach(function (item) {
    console.log(item);
})
console.log("///////////////////////////////\n")

// 扩展运算符（...）
let set = new Set(['red', 'green', 'blue']);
let arr = [...set];
console.log(arr[0]);

let arr2 = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arr2)];
console.log(unique[0]);

console.log("///////////////////////////////\n")
const m = new Map();
const o = {p: 'Hello World'};
m.set(o, 'content');
m.set("age", 22);
m.set("gender", 1);
console.log(m.get(o));
console.log(m.size);
m.has(o) // true
m.delete("age") // true
// m.clear();

// 如果读取一个未知的键，则返回undefined。
console.log(m.get("name") === undefined); // true

// 遍历
for (let key of m.keys()) {
    console.log(key);
}
for (let value of m.values()) {
    console.log(value);
}
for (let [key, value] of m.entries()) {
    console.log(key, value);
}

// forEach遍历map
m.forEach(function(value, key) {
    console.log("Key: ", key, " value: ", value);
});
console.log("///////////////////////////////\n")

let obj = {"a":1, "b":2};
let map = new Map(Object.entries(obj));
console.log(map);
