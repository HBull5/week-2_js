var userInput = document.getElementById('user');
var passInput = document.getElementById('pass');
// var form = document.getElementsByTagName('form');
var submitBtn = document.querySelector('input[type=submit]');
var body = document.querySelector('body');
var div = document.querySelector('#outer');

// form.item(0).addEventListener('click', function (e) {
// 	e.preventDefault();
// 	userInput.style.border = '1px solid red';
// 	passInput.style.border = '1px solid red';
// });

submitBtn.addEventListener('click', function (e) {
	e.preventDefault();
	userInput.style.border = '1px solid red';
	passInput.style.border = '1px solid red';
	// userInput.value = 'abc123';
	userInput.value = '';
	passInput.value = '';
});

// body.addEventListener('keydown', function (e) {
// 	console.log(e.code);
// 	if (e.code === 'ArrowUp') {
// 		document.querySelector('div').style.position = 'absolute';
// 		document.querySelector('div').style.top = '-100px';
// 	}
// });

body.addEventListener('cut', function (e) {
	console.log('you cut stuff');
});

userInput.addEventListener('input', function (e) {
	div.innerHTML = e.target.value;
});
