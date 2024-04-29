/*---

    innerHTML
    textContent

---*/

const list = document.getElementById('first');
const div = document.getElementById('second');
const item = document.querySelector('.item');

console.log(div.textContent);
console.log(list.innerHTML);
console.log(list.textContent);

const ul = document.createElement('ul');
ul.innerHTML = `<li class="item">list items</li>
<li>list item</li>`

document.body.appendChild(ul);

div.textContent = 'hello world';
// no diff but its imp to add html element ⬇️
div.innerHTML = 'hello worlds';

/*---

    CSS

---*/

const random = document.querySelector('.random');

// You have to add everytime to add new style
// random.style.backgroundColor = 'blue';

random.classList.add('title');