/*---

    CONDITIONAL STATEMENTS

//Comparison Operators
    - >, <, >=, <=, ==, ===, !=, !===

- if(){}
- ! : not
- = : assign
- == : equal
- === : eual & same type
- !== : checks only for value not type

---*/

const value = 2 > 1;
// console.log(typeof value); -> Boolean
const value2 = 1 > 2;

if (value2) {
    console.log('Hello World');
}
else {
    console.log('False')
}

//code block {whatever inside here}

const num1 = 2, num2 = 2;

if (num1 > num2) {
    console.log(num1 + ' ' + 'is bigger')
}
else {
    console.log(num2 + ' ' + 'is bigger')
}

// ==

const n1 = 3, n2 = '3';
if (n1 == n2) {
    console.log('== true')
}
else{
    console.log('== false')
}

// ===

const n3 = 3, n4 = 3;
if (n3 === n4) {
    console.log('=== true')
}
else{
    console.log('=== false')
}

// !==

if (n3 !== n4) {
    console.log('!== true')
}
else{
    console.log('!== false')
}
