// var form = document.querySelector('form');
var submitBtn = document.querySelector('button[type=submit]');
var inputs = document.querySelectorAll('input'); // node list

submitBtn.addEventListener('click', function (e) {
	console.log('submission');
	inputs.forEach(function (input) {
		input.classList.add('validation');
	});
});
