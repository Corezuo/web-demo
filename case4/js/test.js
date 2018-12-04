
var array = [],
    info = [];

for (var i = 0; i < 3; i++) {
    info = [];
    info.push("name" + i);
    info.push("age" + i);
    array.push(info);
}
console.log("array: ", array);
