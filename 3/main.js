/*---

Variable: Most basic building block
Variable: Store, Access, Modify === Value
Declare, Assignment Operator, Assign Value

---*/

let /*keyword*/ fullName = /*Assignment Operator*/ "JavaScript";
console.log(fullName);

// console.log(full); --- Error as it is not defined

/*---

Assign value later, modify existing

---*/

let address, zip, state;

address = "Japan";
zip = '11';
state = 'Arizona';

console.log(address, zip, state);

fullName = "Python"; //Re-assigned a value from line 9
console.log(fullName);

/*---

VARIABLE RULES

- Can contain digits, letters, _ , $
- Can start only with: letter, $ OR _
- No keyword (let, var, const)
- Cannot start with number
- Case sensitive: Fullname OR fullname
- use either camelCase OR _underscore [helpful]

---*/

/*---Keywords

- var : traditional replaced in ES6 - function quote
- let : - block quote
- const : it is constant - can't be re-assigned  - block quote

---*/

var value = "some value";
value = "some other value"; //re-assigned

let nameIs = "ram";
nameIs = "rame";

const pi = "3.14";
// pi = "3.1428"

console.log(value, nameIs);
console.log(pi);

/*--- Which to use? "" OR '' ---*/

const firstName = "Hari's"; //if needed
console.log(firstName);

/*---

- String Concatenation: Combine string value
- `` : backticks (template strings) - easy option

---*/

   //String Concatenation

const lastName = "Prasai";
console.log('Hello your name is '+ firstName + ' '  + lastName);

let userName = firstName + ' '  + lastName;
console.log(userName);

   //