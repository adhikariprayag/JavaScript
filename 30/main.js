/*---

EVENT OBJECT

    event object argument e, evt
    info about triggered event
    event.type
    event.currentTarget
    this keyword
    preventDefault() - prevents default behaviour

    //-> "this" does not work in arrow function

---*/

const heading = document.querySelector('h2');
const btn = document.querySelector('.btn');
const link = document.getElementById('link')

heading.addEventListener('click', function(event){
    // heading.classList.add('blue');
    console.log(event.currentTarget);
    console.log(this)
})

btn.addEventListener('click', function(event){
    // heading.classList.add('blue');
    console.log(event.currentTarget);
    event.currentTarget.classList.add('blue')
    console.log(event.type)
})

//---PREVENT DEFAULT

function someFunc(e){
    e.preventDefault();
}

link.addEventListener('click', someFunc);

//---THIS
//it has less functionality compared to event object

