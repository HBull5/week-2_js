var input = document.querySelector('input[type=text]');
var form = document.querySelector('form');

input.addEventListener('focus', function (e) {
	input.style.border = '1px solid green';
});

input.addEventListener('blur', function (e) {
	input.style.border = '1px solid black';
});

form.addEventListener('click', function (e) {
	e.preventDefault();
	console.log(e.target);
});
