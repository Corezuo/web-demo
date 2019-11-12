/**
 * 方式一：清除两侧空格
 * @param s 被操作的参数
 * @return 结果
 */
function trim(s){
    return trimRight(trimLeft(s));
}

//去掉左边的空白
function trimLeft(s){
    if(s == null) {
        return "";
    }
    var whitespace = new String(" \t\n\r");
    var str = new String(s);
    if (whitespace.indexOf(str.charAt(0)) != -1) {
        var j=0, i = str.length;
        while (j < i && whitespace.indexOf(str.charAt(j)) != -1){
            j++;
        }
        str = str.substring(j, i);
    }
    return str;
}

//去掉右边的空白
function trimRight(s){
    if(s == null) return "";
    var whitespace = new String(" \t\n\r");
    var str = new String(s);
    if (whitespace.indexOf(str.charAt(str.length-1)) != -1){
        var i = str.length - 1;
        while (i >= 0 && whitespace.indexOf(str.charAt(i)) != -1){
            i--;
        }
        str = str.substring(0, i+1);
    }
    return str;
}

var name = " da zuo ";
console.log("name:", name);
console.log("length: ", name.length);
name = trim(name);
console.log("name2: ", name);
console.log("length2: ", name.length);


/**
 * 方式二：正则去两侧空格
 * @param s 被操作的参数
 * @return 结果
 */

//去左空格;
function ltrim(s){
    return s.replace(/(^\s*)/g, "");
}
//去右空格;
function rtrim(s){
    return s.replace(/(\s*$)/g, "");
}
//去左右空格;
function trimAll(s){
    return s.replace(/(^\s*)|(\s*$)/g, "");
}

var title = " he llo ";
console.log("title length: ", title.length);
title = trimAll(title);
console.log("title length2: ", title.length);
