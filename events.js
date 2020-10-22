var body = document.querySelector('body');
body.style.height = '100vh';

// function logEvent() {
// 	console.log('event fired...');
// }

// body.addEventListener('click', logEvent); // omit parenthesis, just pass in the function definition

// body.addEventListener('click', function (e) {
// 	console.log('event fired');
// 	// console.log(e.target);

// 	// e.preventDefault();
// });

document.querySelector('form').addEventListener('click', function (e) {
	console.log(e.target);
	e.preventDefault(); // prevents default html behavior
	// e.stopPropagation(); // prevents bubbling
});
