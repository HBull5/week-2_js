// HTML collections & Node Lists
var results;

// document.getElementById() returns a element node
// results = document.getElementById('mage');

// document.querySelector() returns a element node
// results = document.querySelector('#mage');

// document.getElementsByClassName() returns a HTML collection

// document.getElementsByTagName() returns a HTML collection

// document.querySelectorAll() returns a Node List

// Whats the difference?

// results = document.getElementsByTagName('p');
// // .item(index) & .namedItem(name)
// results = results.item(0);

var htmlCollection = document.getElementsByTagName('div'); // HTML Collection
htmlCollection = htmlCollection.item(0);
htmlCollection = htmlCollection.childNodes; // return HTML collection
// htmlCollection = Array.from(htmlCollection);

console.log(htmlCollection.pop());
