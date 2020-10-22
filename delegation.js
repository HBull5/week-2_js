var grandparent = document.querySelector('#grandparent-div');

grandparent.addEventListener('click', function (e) {
	// check what event.target is
	// console.log(e.target);

	console.log('event fired...');

	if (e.target.id === 'grandparent-div') {
		console.log('blue');
	} else if (e.target.id === 'parent-div') {
		console.log('red');
	} else if (e.target.id === 'baby-div') {
		console.log('green');
	}
});
