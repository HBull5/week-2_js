// console.log(document.all);
// console.log(document.head);
// console.log(document.body);

// var h1 = document.getElementById('heading');
// var lead = document.getElementsByClassName('lead');
// var paragraphs = document.getElementsByTagName('p');
// console.log(h1);
// console.log(lead);
// console.log(paragraphs);

// var h1 = document.querySelector('#heading'); // the FIRST <h1>
// var p = document.querySelector('p:nth-child(2)');
// var pass = document.querySelector('input[type=password]');

// console.log(h1);
// console.log(p);
// console.log(pass);

var para1 = document.querySelector('p');
var paraAll = Array.from(document.querySelectorAll('div > p')); // node list

console.log(para1);
console.log(paraAll);
