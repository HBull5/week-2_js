var results;
var div = document.querySelector('div');
var numbers = [5, 3, 12, 100, 7];
var fruits = ['strawberries', 'bananas', 'apples', 'brusselspouts'];
var objs = [
	{ name: 'vinny', age: 3 },
	{ name: 'john', age: 15 },
	{ name: 'Ellie', age: 1 },
	{ name: 'Steve' }
];

// sort
// results = fruits.sort();
// results = numbers.sort(function (a, b) {
// 	return a - b; // ascending order
// });

// results = numbers.sort(function (a, b) {
// 	return b - a; // descending order
// });

// results = numbers.sort(function (first, second) {
// 	if (first > second) {
// 		return 100; // a returned positive value swaps first w/ second
// 	} else if (first < second) {
// 		return -100; // a returned a negative value swaps the second number into the higher index position
// 	} else {
// 		return 0; // considered sorted
// 	}
// });

results = objs.sort(function (a, b) {
	return a.age - b.age; // ascending order
});

// find
results = fruits.find(function (fruit) {
	if (fruit === 'apples') {
		return true; // return apples
	}
});

results = numbers.find(function (num) {
	if (num > 10) {
		return true;
	}
});

// map : does something to every element of an array
results = numbers.map(function (num) {
	return num * 2;
});

results = fruits.map(function (fruit) {
	return fruit + '!';
});

results = numbers
	.map(function (num) {
		return num * 2;
	})
	.map(function (num) {
		return num * 2;
	});

// filter
results = numbers.filter(function (num) {
	if (num > 5) {
		return num;
	}
});

results = fruits.filter(function (fruit) {
	if (fruit.length > 6) {
		return fruit;
	}
});

results = objs.filter(function (obj) {
	if (obj.age !== undefined) {
		return obj;
	}
});

// console.log(objs[3].age);

// reduce
results = numbers.reduce(function (total, num) {
	return total + num;
}, 10);

div.innerHTML = results;
// console.log(results);
