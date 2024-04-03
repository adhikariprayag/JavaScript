/*---

ARRAYS

- easier to store numerous values
- [], 0 index based
- strings, numbers, booleans, functions & objects

---*/

const f1 = "Apple", f2 = "Banana", f3 = "Orange", f4 = "Melon";

const fruits = ['Apple', 'Banana', 'Orange', 'Melon', 45, undefined, null]

console.log(fruits);

console.log(fruits[0]); //To access first value

console.log(fruits[8]); //No value = undefined

let bestFruit = fruits[3];
console.log(bestFruit);

//Change a value of an array
fruits[4] = "Grapes";

console.log(fruits);
console.log(fruits[4]);

