var input = document.querySelector('#item');
var output = document.querySelector('div');
var items = ['apples', 'asparagus', 'asiago'];

input.addEventListener('input', function (e) {
	output.innerHTML = '';
	var matches = items.filter(function (item) {
		if (item.includes(input.value)) {
			output.innerHTML += item + ' ';
		}
	});
});

// o of n time which is the good
