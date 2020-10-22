var newLi = document.createElement('li'); // create new list item
var textNode = document.createTextNode('Item #4'); // create text node
newLi.appendChild(textNode);
var textNode2 = document.createTextNode('Item #FOUR');
newLi.replaceChild(textNode2, textNode); // takes in the actual textNode
newLi.appendChild(textNode2);
// newLi.replaceChild(textNode2, newLi.childNodes.item(0));
/**
 * Runs parameters against a regex to verify its content to replace, format must be a textnode
 */
// newLi.childNodes.item(0).remove();
// textNode2.remove(); // smarter but a little ambiguous //? Turning off for example b/c we want to leave the text
// newLi.className = 'my-class'; //? example from yesterday
// newLi.classList.add('my-class');
// newLi.classList.remove('my-class');
newLi.classList.toggle('my-class');
newLi.classList.toggle('my-class');

console.log(newLi);
// console.log(textNode);
