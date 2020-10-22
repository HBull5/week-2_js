var grandparent = document.querySelector('#grandparent-div');
var parent = document.getElementById('parent-div');
var baby = document.getElementById('baby-div');
var twin = document.querySelector('#twin-div');
var body = document.querySelector('body');

grandparent.addEventListener('click', function () {
	console.log('blue');
});

parent.addEventListener('click', function () {
	console.log('red');
});

baby.addEventListener('click', function (e) {
	console.log('green');
	// e.stopPropagation();
});

body.addEventListener('click', function (e) {
	console.log('body');
});

twin.addEventListener('click', function (e) {
	console.log('twin');
	// e.stopPropagation();
});
