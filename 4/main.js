/*---

Numbers
Loosely Typed = don't declare type

---*/

const pi = 3.14;
let num = 34;
num = "Eleven"; //reassigned

console.log(pi);
console.log(num); //Replaced

// Expression = Combination -> Computation = Evaluation

/*---

JAVASCRIPT OPERATORS

- Basic: ( + - * / )
- Advanced: +=, -=, *=, ++, --, %
- Modulus (%) operator returns the remainder after integer divison

---*/

const num1 = 20;
const num2 = 10;

const add = num1 + num2;
const sub = num1 - num2;
const mul = num1 * num2;
const div = num1 / num2;

console.log(add, sub, mul, div);

let num3 = 40;
num3 += 5; //num3 + 5 = 40 + 5
console.log(num3)

num3 -= 5;
console.log(num3)

num3++; //adds +1
console.log(num3);

const amt1 = 10 / 3;
const amt2 = 10 % 3; //Gets remainder
console.log(amt1, amt2);

// JS FOLLOWS BASIC MATHEMATICS RULE i.e. BODMAS RULE AND OTHER SIMILAR