/*---

submit event listener
prevent default 
how to get value

//by default working with form we have action attribute
    - action attribute tells where to send 
    - frontend ma reload vaidincha and sends directly

---*/

const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');



form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('form submit');
    console.log(name.value);
    console.log(password.value)
})