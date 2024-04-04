/*---

IMPLICIT TYPE CONVERSION

---*/

const fName = 'john', lName = 'harris';
const value = fName - lName;
console.log(value); //NaN : Not a number


//Both strings
const num1 = '10';
const num2 = '20';

const result = num1 - num2; //Gives number (tries to help) : 10 - 20
console.log(result);

const result2 = num1 + num2; //Concatinates
console.log(result2); //1020

//One String
const num3 = 30;
const num4 = '20';

const result3 = num3 + num4; //Still Concatinates
console.log(result3);