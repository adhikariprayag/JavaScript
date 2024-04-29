/*--
    nodeValue
    textContent
--*/

const item = document.getElementById('special');
const value = item.nodeValue; /*NULL*/
console.log(item.childNodes[0].nodeValue);
console.log(item.firstChild.nodeValue);

const easyValue = item.textContent;
console.log(easyValue);

/*--

    getAttribute()
    setAttribute()

--*/

const first = document.querySelector('.first');
const classValue = first.getAttribute('id');
console.log(classValue);

const link = document.getElementById('link');
const showLink = link.getAttribute('href');
console.log(showLink);

const last = link.nextElementSibling;
last.setAttribute('class', 'first');
last.textContent = 'i also have class of first';
console.log(last);

const links = document.querySelectorAll('.first');
console.log(link);


