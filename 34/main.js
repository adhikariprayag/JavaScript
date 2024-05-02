/*---

Web storage API = provided by browser
session storage, local storage
setItem, getItem, removeItem, clear

localStorage.setItem('name', 'john');
sessionStorage.setItem('name', 'john');

// ss - presisting (saving) data betn session
// lol - opening & closing of browser
---*/

// localStorage.setItem('name', 'john');
// localStorage.setItem('adddress', 'ktm');
// sessionStorage.setItem('name', 'john');

// const fname = localStorage.getItem('name');
// console.log(fname);
// localStorage.removeItem('name');

// localStorage.clear();

/*---

--- LOCAL STORAGE WITH MULTIPLE ITEMS ---

JSON.stringify(), JSON.parse()

---*/

const friends = ['john', 'peter', 'bob'];

localStorage.setItem('friends', JSON.stringify(friends));

const values = JSON.parse(localStorage.getItem('friends'));
console.log(values[1]);

//checking if array has values and add of not

let fruits;

if(localStorage.getItem('fruits')){
    fruits = JSON.parse(localStorage.getItem('fruits'));
}
else{
    fruits = [];
}

console.log(fruits);
fruits.push('apple');
fruits.push('orange');
localStorage.setItem('fruits', JSON.stringify(fruits));
