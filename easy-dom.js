// get the variable w/ the class of lead the first one
var lead = document.querySelector('#my-id');

// var str = 'hello world';

// lead.textContent = 'hello world'; //overwrites text content
// lead.textContent += 'hello world'; //appends text content

lead.innerHTML = '<h1>Heading</h1>';
lead.innerHTML = 'hello world';
lead.innerHTML += '<h1>Heading</h1>';
lead.innerHTML += `<ul>
    <li>1</li>
    <li>2</li>
</ul>`; // ` don't care about new lines

lead.innerHTML = ''; // clear out all of the HTML children

var user = 'Harcourt';

lead.innerHTML = '<h1>' + user + '</h1>'; // simple example

// var users = ['Harcourt', 'Audi', 'Allin', 'Ezra', 'Marquita', 'Kevin'];

// for (var i = 0; i < users.length; i++) {
// 	lead.innerHTML += '<h1>' + users[i] + '</h1>';
// } // more complicated example

// console.log(lead);

// var str1 = 'hello';
// // append world onto str1
// str1 += ' world';
// console.log(str1);

lead.textContent = 'Harcourt';

lead.outerHTML = '<h1>Harcourt</h1>';

var username = document.querySelector('#user');
var pass = document.querySelector('#pass');
var submitBtn = document.querySelector('form input[type=submit]');

// some high level code that just adds a listener onto the submit btn
submitBtn.addEventListener('click', function (e) {
	e.preventDefault();
	console.log(username.value);
	console.log(pass.value);
	console.log(lead.value);
	// username.style.border = 'black 1px solid';
	// pass.style.border = 'black 1px solid';
	if (username.value === '' && pass.value === '') {
		username.style.border = 'red 1px solid';
		pass.style.border = 'red 1px solid';
	} else if (username.value === '') {
		username.style.border = 'red 1px solid';
	} else if (pass.value === '') {
		pass.style.border = 'red 1px solid';
	}
});

console.log(username.value);
