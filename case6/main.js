/**
 * call()和apply()
 *  1.ECMAScript 规范给所有函数都定义了call与apply两个方法，作用也是一模一样，只是传参的形式有区别而已。
 *  2.可以改变this的指向。
 *  3.会使函数立即执行。
 */
(function () {
    var obj = {"name": "dazuo"};
    function Employee () {
        // 此时的this执行 obj
        console.log(this.name);
    }
    // output: dazuo
    Employee.call(obj);

    var info = {};
    function Boss (name, age) {
        console.log("Boss name: ", name);
        console.log("Boss age: ", age);
    }
    Boss.apply(info, ["dazuo", 22]);
})();

/**
 * 原型对象和原型链
 * @type {Person}
 */
Person = (function () {

    function Person () {
        console.log("hello Person");
    }

    Person.prototype.info = "this is Person function";

    Person.prototype.setName = function (name) {
        this.name = name;
    };

    Person.prototype.getName = function () {
        return this.name;
    };

    return Person;
})();

var person = new Person();
console.log("原型属性 info：" + person.info);
person.setName("dazuo");
var name = person.getName();
console.log("name: " + name);

