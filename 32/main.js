/*---

allows select dynamic elements

event propogation - order the events are fired
event bubbling - clicked element first then bubbles up -- default
event capturing - fires at the root and fires untile reaches target

---*/

const container = document.querySelector('.container');
const list = document.querySelector('.list-items');

function showBubbling(e){
    console.log('current target', e.currentTarget);
    // console.log('target', e.Target);

    // if(e.target.classList.contains('link')){
    //     console.log('you clicked me')
    // }
}

function stopPropagation(e){
    console.log('clicked on link');
    e.stopPropagation();
};


// list.addEventListener('click', showBubbling);
// container.addEventListener('click', showBubbling);
// document.addEventListener('click', showBubbling);
// window.addEventListener('click', showBubbling);

// list.addEventListener('click', stopPropagation);

list.addEventListener('click', showBubbling, {capture: true});
container.addEventListener('click', showBubbling, {capture: true});
document.addEventListener('click', showBubbling, {capture: true});
window.addEventListener('click', showBubbling, {capture: true});