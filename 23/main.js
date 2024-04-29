/*---

    childNodes - return all childNodes including whitespace which 
                is treated as text node

    children
    firstChild
    lastChild
---*/

const result = document.querySelector('#result');
const allChildren = result.childNodes;
console.log(allChildren);

const children = result.children;
console.log(children);

console.log(result.firstChild);
console.log(result.lastChild);


/*--- PARENT ELEMENT ---*/

const heading = document.querySelector('h2');
console.log(heading.parentElement.parentElement); /*keeps going top to and reach null */

const parent = heading.parentElement;
parent.style.color = 'pink';

/*--

 -> initially gives whitespace
    previousSibling
    nextSibling

--*/

const first = document.querySelector('.one');
const second = first.nextSibling.nextSibling.style.backgroundColor = 'red';
console.log(second);

const last = document.querySelector('#last');
const third = last.previousSibling.previousSibling;
console.log(third);
console.log(last.nextSibling.nextSibling);

/*--

    previousElementSibling
    nextElementSibling

--*/

first.nextElementSibling.style.color = 'purple';