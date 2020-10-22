var div = document.querySelector('div');

// setTimeout

var dontStop = setTimeout(function () {
	div.innerHTML = 'cant stop wont stop';
}, 3000);

var takeAlongTime = setTimeout(function () {
	div.innerHTML += 'hello';
}, 3000);

setTimeout(function () {
	clearTimeout(takeAlongTime);
	clearTimeout(dontStop);
}, 1000);

// setInterval

// var writeHello = setInterval(function () {
// 	div.innerHTML += 'hello';
// }, 1000);

// clearInterval(writeHello);
