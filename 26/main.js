/*--

    createElement('element')
    createTextNode('text content')
    element.appendChild(childElement) -> to add

---*/

const result = document.querySelector('#result');
const first = document.querySelector('.red');

//create new empty element
const bodyDiv = document.createElement('div');

//create text node
const text = document.createTextNode('A simple body div');

bodyDiv.appendChild(text);
// document.body.appendChild(bodyDiv);

const heading = document.createElement('h2');
const headingText = document.createTextNode('dynamic heading');
heading.appendChild(headingText);
heading.classList.add('blue');

// result.appendChild(heading);

console.log(result.children);

/*--- 

    insertBefore('element', 'location');
    - adds before the location

---*/

document.body.insertBefore(bodyDiv, result);
result.insertBefore(heading, first);


/*--- 

    replaceChild('new', 'old');
    
---*/

const smallHeading = document.createElement('h6');
const smallText = document.createTextNode(`i'm small heading`)

smallHeading.classList.add('red');
smallHeading.appendChild(smallText);
document.body.replaceChild(smallHeading, bodyDiv);