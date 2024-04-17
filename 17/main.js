/*---

 ARRAY PROPERTIES & METHODS

- just like objects arrays also have this

---*/

let names = ['Ram', 'Sam', 'Hari', 'Sita'];

//Length

console.log(names.length); //counts total values
console.log(names[names.length - 1]);

//Concat -> add two arrays

let fruits = ['Apple', 'Banana', 'Grape'];

const allNames = names.concat(fruits);
console.log(allNames);

     // --reverse

console.log(allNames.reverse());

//unshift -> add value at beginning

allNames.unshift('Bobby');
allNames.unshift('Shabi');
console.log(allNames);

//Removes first value -> keeps removing as you add
allNames.shift();
allNames.shift();
allNames.shift();
console.log(allNames);


//PUSH -> adds at end
allNames.push('Bobby');
allNames.push('Shabi');
console.log(allNames);

//POP -> removes from end
allNames.pop();
allNames.pop();
allNames.pop();
allNames.pop();
console.log(allNames);

/*---
 
SPLICE -> used to grab items

-- mutates original array i.e removes from original

---*/

//(0,3) -> starts from 0 and removes till 3

const spliceName  = allNames.splice(0,2);
console.log(spliceName);
console.log(allNames);