/*---

EXPRESSIONS

- another way to define a function

- create a variable
- assign to function (not value)
- use var
- diff : hoisting, || use - arrow function, libraries

---*/

// You can omit function names to manke anonymous function

function addValues(num1, num2){
    return num1 + num2;
}

const firstValue = addValues(3,4);
const secValue = addValues(4,5);

//Function Expression
const add = function (num1, num2){
    return num1 + num2;
}

const values = [firstValue, secValue, add(5,6)];
console.log(values);