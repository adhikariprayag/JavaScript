/*---

DOM - happens instantly
to make really interactive -> event (window scroll, click)

EVENTS

    - select element
    - addEventListener()
    - when event, what to do

---*/

/*---
    CLICK
---*/

const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

function changeColors(){
    let hasClass = heading.classList.contains('red');

    if(hasClass){
        heading.classList.remove('red');
    }
    else{
        heading.classList.add('red');       
    }
}

// btn.addEventListener('click', function(){
//     // console.log('hey you clicked me');
//     heading.classList.add('red');  
// });

btn.addEventListener('click', changeColors);

/*---
    MOUSE EVENTS

    click - fires after full action occurs
    mousedown - button is pressed
    mouseup - button is released
    mouseenter - moved onto an element
    mouseleave - moved out of an an element

---*/

btn.addEventListener('mousedown', () => {
    console.log('down')
})

btn.addEventListener('mouseup', () => {
    console.log('up')
})

btn.addEventListener('mouseenter', () => {
    heading.classList.add('blue');
})

btn.addEventListener('mouseleave', () => {
    heading.classList.remove('blue');
})


/*---
    KEY EVENTS

    keypress - when pressed
    keydown - key down
    keyup - key released

---*/

const nameInput = document.getElementById('name');

/*
nameInput.addEventListener('keypress', function(){
    console.log('you pressed');
})

nameInput.addEventListener('keydown', function(){
    console.log('you pressed');
})
*/

nameInput.addEventListener('keyup', function(){
    console.dir(nameInput);
    console.log(nameInput.value);
})