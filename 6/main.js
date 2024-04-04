/*--

DATA TYPES: 7 total

- Primitive: String, Number, Boolean, Null, Undefined, Symbol

(everything not primitive is obj)
- Object: Arrays, Functions, Objects

- typeof: its an operator (typeof variable OR value)

--*/

//STRING
const text = 'some text';
console.log(typeof text); //string

//NUMBER
const num = 45;
console.log(typeof num) //number

//BOOLEAN : true & false (1,0)
const val1 = true;
const val2 = false;
console.log(typeof val1);
console.log(typeof val2);

//NULL
const result = null;
console.log(typeof result) 
//Null -> not object but its o/p is object its a bug which was from first and too many code relying on it

//UNDEFINED
let nam;
console.log(typeof nam) //SYMBOL ES6
