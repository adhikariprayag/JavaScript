/*--
    DOM

    - document object model manipulation
    - similar to css

    - select element or group of elements 
    - add effect to the selection

    - Different ways
        - document.body.style.backgroundColor = "blue"
        - document.body.style.color = "yellow"
        - document.getElementById('btn).style.color = 'red

    - assign to a variable
--*/

/*
    window object = browser api
    document
    console.dir -> properties with methods
*/

console.log(window);
console.log(document);
// console.dir(document);


// getElementById('element')

const btn = document.getElementById('btn');
btn.style.backgroundColor = 'red';

/*--- 
    getElementsByTagName('tagname')
    node-list = array-like object
    index, length property but not array methods
---*/

const headings = document.getElementsByTagName('h1')
console.log(headings)
headings[1].style.color = 'yellow';
// console.log(headings.length);

const items = document.getElementsByTagName('li');

// items.forEach(function(item){
//     console.log(item)
// });

items[2].style.color = 'purple';
const betterItems = [...items];
betterItems.forEach(function(item){
    console.log(item);
})

console.log(items);
console.log(betterItems);

/*--- 
    getElementsByClassName('classname')
    node-list = array-like object
    index, length property but not array methods
---*/

const listItems = document.getElementsByClassName('special');
console.log(listItems);
listItems[1].style.backgroundColor = 'pink';

/*---
    QUERY SELECTOR

    querySelector('any css); - selects single
    querySelectorAll('any css); - selects all

---*/

const fruits = document.querySelector('#fruits');
fruits.style.backgroundColor = 'orange'

const item = document.querySelector('.special');
console.log(item);

const lastItem = document.querySelector('li:last-child');
console.log(lastItem);

const fruitList = document.querySelectorAll('.special');
fruitList.forEach(function(item){
    console.log(item);
    item.style.color = "yellow"
});

/*---

    childNodes - returns all childNodes including whitespace which 
                 is 

---*/