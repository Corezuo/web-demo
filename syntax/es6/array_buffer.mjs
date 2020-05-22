/**
 * 二进制数组
 * 1）ArrayBuffer对象：代表内存之中的一段二进制数据，可以通过“视图”进行操作。“视图”部署了数组接口，这意味着，可以用数组的方法操作内存。
 * 2）TypedArray对象：用来生成内存的视图，通过9个构造函数，可以生成9种数据格式的视图，比如Uint8Array（无符号8位整数）数组视图, 
 *    Int16Array（16位整数）数组视图, Float32Array（32位浮点数）数组视图等等。
 * 3）DataView对象：用来生成内存的视图，可以自定义格式和字节序，比如第一个字节是Uint8（无符号8位整数）、第二个字节是Int16（16位整数）、
 *    第三个字节是Float32（32位浮点数）等等。
 * 
 * 简单说，ArrayBuffer对象代表原始的二进制数据，TypedArray对象代表确定类型的二进制数据，DataView对象代表不确定类型的二进制数据。它们
 * 支持的数据类型一共有9种（DataView对象支持除Uint8C以外的其他8种）。
 * 
 * 参考文档：https://javascript.ruanyifeng.com/stdlib/arraybuffer.html#
 */

 /**
  * 一、ArrayBuffer对象
  * 
  * ArrayBuffer对象代表储存二进制数据的一段内存，它不能直接读写，只能通过视图（TypedArray视图和DataView视图)来读写，视图的作用是以
  * 指定格式解读二进制数据。
  */
// ArrayBuffer也是一个构造函数，可以分配一段可以存放数据的连续内存区域。
var buf = new ArrayBuffer(32);
// 上面代码生成了一段32字节的内存区域，每个字节的值默认都是0。可以看到，ArrayBuffer构造函数的参数是所需要的内存大小（单位字节）。

// 为了读写这段内容，需要为它指定视图。DataView视图的创建，需要提供ArrayBuffer对象实例作为参数。
var dataView = new DataView(buf);
dataView.getUint8(0) // 0
// 上面代码对一段32字节的内存，建立DataView视图，然后以不带符号的8位整数格式，读取第一个元素，结果得到0，因为原始内存的ArrayBuffer对象，默认所有位都是0。

// 另一种TypedArray视图，与DataView视图的一个区别是，它不是一个构造函数，而是一组构造函数，代表不同的数据格式。
var buffer = new ArrayBuffer(12);
var x1 = new Int32Array(buffer);
x1[0] = 1;
var x2 = new Uint8Array(buffer);
x2[0] = 2;
// 上面代码对同一段内存，分别建立两种视图：32位带符号整数（Int32Array构造函数）和8位不带符号整数（Uint8Array构造函数）。由于两个视图对应的是同一段内存，
// 一个视图修改底层内存，会影响到另一个视图。

// TypedArray视图的构造函数，除了接受ArrayBuffer实例作为参数，还可以接受正常数组作为参数，直接分配内存生成底层的ArrayBuffer实例，并同时完成对这段内存的赋值。
var typedArray = new Uint8Array([0,1,2]);
typedArray.length // 3
typedArray[0] = 5;
typedArray // [5, 1, 2]
// 上面代码使用TypedArray视图的Uint8Array构造函数，新建一个不带符号的8位整数视图。可以看到，Uint8Array直接使用正常数组作为参数，对底层内存的赋值同时完成。

// 1.2 ArrayBuffer.prototype.byteLength
// ArrayBuffer实例的byteLength属性，返回所分配的内存区域的字节长度
var buffer = new ArrayBuffer(32);
console.log(buffer.byteLength);

// ArrayBuffer.prototype.slice()
// ArrayBuffer实例有一个slice方法，允许将内存区域的一部分，拷贝生成一个新的ArrayBuffer对象。
var buffer = new ArrayBuffer(8);
var newBuffer = buffer.slice(0, 3);
// 上面代码拷贝buffer对象的前3个字节（从0开始，到第3个字节前面结束），生成一个新的ArrayBuffer对象。slice方法其实包含两步，第一步是先分配一段新内存，
// 第二步是将原来那个ArrayBuffer对象拷贝过去。
// slice方法接受两个参数，第一个参数表示拷贝开始的字节序号（含该字节），第二个参数表示拷贝截止的字节序号（不含该字节）。如果省略第二个参数，则默认到原
// ArrayBuffer对象的结尾。除了slice方法，ArrayBuffer对象不提供任何直接读写内存的方法，只允许在其上方建立视图，然后通过视图读写。

// ArrayBuffer.isView()
// ArrayBuffer有一个静态方法isView，返回一个布尔值，表示参数是否为ArrayBuffer的视图实例。这个方法大致相当于判断参数，是否为TypedArray实例或DataView实例。
var buffer = new ArrayBuffer(8);
ArrayBuffer.isView(buffer) // false
var v = new Int32Array(buffer);
ArrayBuffer.isView(v) // true


/**
 * 二、TypedArray对象
 * 
 * ArrayBuffer对象作为内存区域，可以存放多种类型的数据。同一段内存，不同数据有不同的解读方式，这就叫做“视图”（view）。ArrayBuffer有两种视图，
 * 一种是TypedArray视图，另一种是DataView视图，两者的区别主要是字节序，前者的数组成员都是同一个数据类型，后者的数组成员可以是不同的数据类型。
 */

// TypedArray对象一共提供9种类型的视图，每一种视图都是一种构造函数。两者的差异主要在以下方面:
// 1）TypedArray数组的所有成员，都是同一种类型和格式。
// 2）TypedArray数组的成员是连续的，不会有空位。
// 3）Typed化数组成员的默认值为0。比如，new Array(10)返回一个正常数组，里面没有任何成员，只是10个空位；new Uint8Array(10)返回一个类型化数组，里面10个成员都是0。
// 4）TypedArray数组只是一层视图，本身不储存数据，它的数据都储存在底层的ArrayBuffer对象之中，要获取底层对象必须使用buffer属性。

// 构造函数
// TypedArray数组提供9种构造函数，用来生成相应类型的数组实例。
// 语法：TypedArray(buffer, byteOffset=0, length?)
// 第一个参数（必需）：视图对应的底层ArrayBuffer对象。
// 第二个参数（可选）：视图开始的字节序号，默认从0开始。
// 第三个参数（可选）：视图包含的数据个数，默认直到本段内存区域结束。

// 创建一个8字节的ArrayBuffer
var b = new ArrayBuffer(8);
// 创建一个指向b的Int32视图，开始于字节0，直到缓冲区的末尾
var v1 = new Int32Array(b);
// 创建一个指向b的Uint8视图，开始于字节2，直到缓冲区的末尾
var v2 = new Uint8Array(b, 2);
// 创建一个指向b的Int16视图，开始于字节2，长度为2
var v3 = new Int16Array(b, 2, 2);
// 上面代码在一段长度为8个字节的内存（b）之上，生成了三个视图：v1、v2和v3。

// TypedArray(length)
// 视图还可以不通过ArrayBuffer对象，直接分配内存而生成。
var f64a = new Float64Array(8);
f64a[0] = 10;
f64a[1] = 20;
f64a[2] = f64a[0] + f64a[1];
// 上面代码生成一个8个成员的Float64Array数组（共64字节），然后依次对每个成员赋值。这时，视图构造函数的参数就是成员的个数。可以看到，视图数组的
// 赋值操作与普通数组的操作毫无两样。

// TypedArray(typedArray)
// 类型化数组的构造函数，可以接受另一个视图实例作为参数。
var typedArray = new Int8Array(new Uint8Array(4));
// 上面代码中，Int8Array构造函数接受一个Uint8Array实例作为参数。
// 注意，此时生成的新数组，只是复制了参数数组的值，对应的底层内存是不一样的。新数组会开辟一段新的内存储存数据，不会在原数组的内存之上建立视图。

// TypedArray(arrayLikeObject)
// 构造函数的参数也可以是一个普通数组，然后直接生成TypedArray实例。
var typedArray = new Uint8Array([1, 2, 3, 4]);
// 注意，这时TypedArray视图会重新开辟内存，不会在原数组的内存上建立视图。上面代码从一个普通的数组，生成一个8位无符号整数的TypedArray实例。
// TypedArray数组也可以转换回普通数组。

// 字节序
// 字节序指的是数值在内存中的表示方式。
// 下面的函数可以用来判断，当前视图是小端字节序，还是大端字节序。
const BIG_ENDIAN = Symbol('BIG_ENDIAN');
const LITTLE_ENDIAN = Symbol('LITTLE_ENDIAN');

function getPlatformEndianness() {
  let arr32 = Uint32Array.of(0x12345678);
  let arr8 = new Uint8Array(arr32.buffer);
  switch ((arr8[0]*0x1000000) + (arr8[1]*0x10000) + (arr8[2]*0x100) + (arr8[3])) {
    case 0x12345678:
      return BIG_ENDIAN;
    case 0x78563412:
      return LITTLE_ENDIAN;
    default:
      throw new Error('Unknown endianness');
  }
}

// BYTES_PER_ELEMENT属性
// 每一种视图的构造函数，都有一个BYTES_PER_ELEMENT属性，表示这种数据类型占据的字节数。
Int8Array.BYTES_PER_ELEMENT // 1
Uint8Array.BYTES_PER_ELEMENT // 1
Int16Array.BYTES_PER_ELEMENT // 2
Uint16Array.BYTES_PER_ELEMENT // 2
Int32Array.BYTES_PER_ELEMENT // 4
Uint32Array.BYTES_PER_ELEMENT // 4
Float32Array.BYTES_PER_ELEMENT // 4
Float64Array.BYTES_PER_ELEMENT // 8
// 这个属性在TypedArray实例上也能获取，即有TypedArray.prototype.BYTES_PER_ELEMENT。

// ArrayBuffer与字符串的互相转换
// ArrayBuffer转为字符串，或者字符串转为ArrayBuffer，有一个前提，即字符串的编码方法是确定的。

// ArrayBuffer转为字符串，参数为ArrayBuffer对象
function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint16Array(buf));
}

// 字符串转为ArrayBuffer对象，参数为字符串
function str2ab(str) {
  var buf = new ArrayBuffer(str.length * 2); // 每个字符占用2个字节
  var bufView = new Uint16Array(buf);
  for (var i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

/**
 * 三、DataView视图
 * 
 * 如果一段数据包括多种类型（比如服务器传来的HTTP数据），这时除了建立ArrayBuffer对象的复合视图以外，还可以通过DataView视图进行操作。
 * DataView视图提供更多操作选项，而且支持设定字节序。本来，在设计目的上，ArrayBuffer对象的各种TypedArray视图，是用来向网卡、声卡之类的本机设备
 * 传送数据，所以使用本机的字节序就可以了；而DataView视图的设计目的，是用来处理网络设备传来的数据，所以大端字节序或小端字节序是可以自行设定的。
 */
// DataView视图本身也是构造函数，接受一个ArrayBuffer对象作为参数，生成视图。
// DataView(ArrayBuffer buffer [, 字节起始位置 [, 长度]]);
var buffer = new ArrayBuffer(24);
var dv = new DataView(buffer);

// DataView实例有以下属性，含义与TypedArray实例的同名方法相同。
// 1）DataView.prototype.buffer：返回对应的ArrayBuffer对象
// 2）DataView.prototype.byteLength：返回占据的内存字节长度
// 3）DataView.prototype.byteOffset：返回当前视图从对应的ArrayBuffer对象的哪个字节开始
// 
// DataView实例提供8个方法读取内存。
// 1）getInt8：读取1个字节，返回一个8位整数。
// 2）getUint8：读取1个字节，返回一个无符号的8位整数。
// 3）getInt16：读取2个字节，返回一个16位整数。
// 4）getUint16：读取2个字节，返回一个无符号的16位整数。
// 5）getInt32：读取4个字节，返回一个32位整数。
// 6）getUint32：读取4个字节，返回一个无符号的32位整数。
// 7）getFloat32：读取4个字节，返回一个32位浮点数。
// 8）getFloat64：读取8个字节，返回一个64位浮点数。

var buffer = new ArrayBuffer(24);
var dv = new DataView(buffer);
// 从第1个字节读取一个8位无符号整数
var v1 = dv.getUint8(0);
// 从第2个字节读取一个16位无符号整数
var v2 = dv.getUint16(1);
// 从第4个字节读取一个16位无符号整数
var v3 = dv.getUint16(3);

// 如果一次读取两个或两个以上字节，就必须明确数据的存储方式，到底是小端字节序还是大端字节序。默认情况下，DataView的get方法使用大端字节序解读数据，
// 如果需要使用小端字节序解读，必须在get方法的第二个参数指定true。
var v3 = dv.getUint16(3);
// 小端字节序
var v1 = dv.getUint16(1, true);
// 大端字节序
var v2 = dv.getUint16(3, false);

// DataView视图提供8个方法写入内存。
// 1）setInt8：写入1个字节的8位整数。
// 2）setUint8：写入1个字节的8位无符号整数。
// 3）setInt16：写入2个字节的16位整数。
// 4）setUint16：写入2个字节的16位无符号整数。
// 5）setInt32：写入4个字节的32位整数。
// 6）setUint32：写入4个字节的32位无符号整数。
// 7）setFloat32：写入4个字节的32位浮点数。
// 8）setFloat64：写入8个字节的64位浮点数。

// 这一系列set方法，接受两个参数，第一个参数是字节序号，表示从哪个字节开始写入，第二个参数为写入的数据。对于那些写入两个或两个以上字节的方法，需要
// 指定第三个参数，false或者undefined表示使用大端字节序写入，true表示使用小端字节序写入。

// 在第1个字节，以大端字节序写入值为25的32位整数
dv.setInt32(0, 25, false);
// 在第5个字节，以大端字节序写入值为25的32位整数
dv.setInt32(4, 25);
// 在第9个字节，以小端字节序写入值为2.5的32位浮点数
dv.setFloat32(8, 2.5, true);

// 如果不确定正在使用的计算机的字节序，可以采用下面的判断方式。
var littleEndian = (function() {
  var buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true);
  return new Int16Array(buffer)[0] === 256;
})();
// 如果返回true，就是小端字节序；如果返回false，就是大端字节序。
