/*---

    - prepend
    - innerText

---*/

const heading = document.createElement('h2');
heading.innerText = `i'm a dynamic heading`;
document.body.prepend(heading); 

/*---

    - remove
    - removeChild

---*/

const result = document.querySelector('#result');
// result.remove(); 

const head = result.querySelector('h2');
result.removeChild(head);
console.log(head);



