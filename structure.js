// console.log(window);
console.log(document.body.children); // html collection
console.log(document.body.childNodes); // node list
// console.log([1, 23, 'hello']);

// document.body.children.forEach(function (ele) {
// 	console.log(ele);
// });

var htmlCollection = document.body.children;
var nodeList = document.body.childNodes;

var arr1 = Array.from(htmlCollection);
var arr2 = Array.from(nodeList);
console.log(arr1, arr2);
