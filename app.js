// var list = document.querySelector('ul'); // element node
// var li = document.querySelector('li'); // element node

// list = Array.from(list.children);
// // list = Array.from(list);

// console.log(list);

// list.forEach(eachOne);

// function eachOne(ele) {
// 	console.log(ele);
// }

// console.log(list.childNodes); // node list is a little more specific
// console.log(list.children);

// console.log(document.body.children);
// console.log(document.body.children.item(0));
// console.log(document.body.children[0].children.item(1));

// console.log(document.body.children[0].firstElementChild);
// console.log(document.body.childElementCount);

// console.log(document.body.children[0].parentNode); // parentElement & parentNode on element nodes, DO NOT have on html collections || node lists

// console.log(li);
// console.log(li.parentElement);
// console.log(list.children.item(0).children);

// console.log(document.body.children[0].children.item(0).nextElementSibling);

// console.log(document.querySelector('li').previousElementSibling);

var newLi = document.createElement('li');
// newLi.id = 'my-id';
// newLi.className = 'my-class';
newLi.setAttribute('id', 'my-id');
newLi.setAttribute('class', 'my-class my-other-class');
newLi.setAttribute('required', '');
newLi.removeAttribute('required');

console.log(newLi);
console.log(newLi.getAttribute('disabled')); // return null

// if(newLi.getAttribute('id') === 'my-id') {
//     // then do something that my-id element
// }

if (newLi.hasAttribute('id')) {
	if (newLi.getAttribute('id') === 'my-id') {
		console.log('lalalalalalalalal');
	} else {
		console.log('cry');
	}
}
