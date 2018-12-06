
var array = [],
    info = [];

for (var i = 0; i < 3; i++) {
    info = [];
    info.push("name" + i);
    info.push("age" + i);
    array.push(info);
}
console.log("array: ", array);


var obj = {};
obj.name = "dazuo";
obj["age"] = 22;
obj["back-groundcolor"] = 1234;
console.log("obj: ", obj);
var objStr = JSON.stringify(obj);
console.log("objStr: ", objStr);

/**
 * 横线连接转换驼峰
 * @param value 横线连接
 * @return {string}
 */
function lineToHump(value) {
    return value.replace(/\-(\w)/g, function(all, letter){
        return letter.toUpperCase();
    });
}

/**
 * 驼峰转换横线连接
 * @param value 驼峰
 * @returns {string}
 */
function humpToLine(value) {
    return value.replace(/([A-Z])/g,"-$1").toLowerCase();
}

console.log(humpToLine("fontSize"));
console.log(lineToHump("font-size"));

/*
  JSON.parse()解析字符串
    1.如果是空字符串，解析会报异常。
    2.如果解析null，则返回的对象是null，注意不是字符串'null'。
    3.如果解析字符串'{}'，则返回空对象。
  JSON.stringify()序列化对象
    1.如果序列化的对象是null，返回的是字符串'null'。
    2.如果序列化的是空对象，返回的是字符串'{}'，因此可以用来判断空对象。
    3.如果序列化普通变量，则返回其字符串表示。
*/

var obj = '22';
var result = JSON.parse(obj);
if (result === 22) {
    console.log("ok");
}

