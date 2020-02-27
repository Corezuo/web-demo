class Token {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return "(" + this.x + "," + this.y + ")";
    }
    
    get () {
        console.log("this is get");
    }

    // 私有方法，但是在类的外部还是可以访问
    _set () {
        console.log("this is set");
    }

    static getInstance () {
        return new Token(3, 3);
    }
}

// 继承
class UserToken extends Token {

    constructor(x, y) {
        super(x, y);
    }
}

console.log(typeof Token); // "function"，类的数据类型就是函数
console.log(Token === Token.prototype.constructor); // true，类本身就指向构造函数。

console.log("////////////////////////////////////////");

// 实例化
var token = new Token(2, 2);
console.log(token.x);
console.log(token.toString);
token.get();
token._set();

// 默认的构造方法
console.log((new Token()).x);

// 静态方法
var token = Token.getInstance();
console.log(token.x);
console.log(Token.a);

// 父类的静态方法，可以被子类继承。
console.log("UserToken.getInstance.x: ", UserToken.getInstance().x);
