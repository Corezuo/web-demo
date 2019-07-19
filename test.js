// var pages = [];
// var total = 6;
// var arr = String(total).split(".");
// if (arr.length > 1 && arr[1] > 0) {
//
// }


var total = 141;
var _sPage = Math.ceil(parseInt(total, 10) / 10);
var sPage = [];
for(var i = 0;i < _sPage;i++){
    sPage.push(i+1);
}
console.log(sPage);
