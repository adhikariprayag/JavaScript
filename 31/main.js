/*---

currentTarget - always refers to the element to which the 
    event handler has been attached to

target - identifies the element on which the event occured
eg. if you click items inside a neseted loop the class will
    be added to only that element

---*/

const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
       // console.log(e.currentTarget);
       // e.currentTarget.classList.add('green');
        console.log(e.target);
        e.target.classList.add('green')
    })
})