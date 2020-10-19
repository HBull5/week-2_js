debugger;

var var1 = 1;

var1 = 'hello';

var var2 = 'abc123';

function foo() {
	var sum = add(2, 2);
	console.log(sum);
}

function add(num1, num2) {
	return num1 + num2;
}

foo();
