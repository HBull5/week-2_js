var pattern = /hel.o/g; // defines the pattern. This pattern is searching for 'hello'. g is for global search i.e. all instances that match
var str = 'hello heldo';
str = 'choclate helzo';

console.log(pattern.exec('aligator')); //? Do example where there is no match

console.log(pattern.test('hell'));

var username = '$user123';
var userPattern = /^[^\s$][A-Za-z0-9]{1,10}$/;

if (userPattern.test(username)) {
	console.log('valid username');
} else {
	console.log('invalid username try again');
}

// console.log(str.match(pattern));

// console.log(str.search(pattern));

// str = str.replace(pattern, 'birthday');
// console.log(str);
