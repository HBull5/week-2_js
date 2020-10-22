//! Test on difference between mouseenter & mouseover
var div = document.querySelector('#outer');

// div.addEventListener('mouseover', function (e) {
// 	console.log(e.target);
// });

// div.addEventListener('mouseout', function (e) {
// 	console.log('moved out....');
// });

div.addEventListener('mousemove', function (e) {
	// div.style.background =
	// 	'rgb(' + e.x + ',' + e.y + ', ' + Math.floor(Math.random() * 255) + 1 + ')';
	div.style.background = `rgb(${e.x}, ${e.y}, ${
		Math.floor(Math.random() * 255) + 1
	})`; //? Template literals we cover next week
});
