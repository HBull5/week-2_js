var obj = {
	key: 'value'
};

// convert our JS object into JSON
obj = JSON.stringify(obj);

// convert our JSON string into a JS object
obj = JSON.parse(obj);

console.log(obj.key);
console.log(typeof obj);
