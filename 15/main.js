/*---

STRING PROPERTIES & METHODS

- wrapper string object (memorization not needed)
- invoking () methods is necessary

---*/


let text = ' Peter Johnson'

//Property
console.log(text.length); //White spaces counted

//Methods
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(0));
console.log(text.charAt(text.length - 1)); //to get last character
console.log(text.indexOf('P')); //case sensitive
console.log(text.trim()) //trims white space

//checks if it is true or not

console.log(text.startsWith('peter'));  //false
console.log(text.trim().toLowerCase().startsWith('peter')); //true

console.log(text.includes('ohn'));
console.log(text.slice(0,5));
console.log(text.slice(-4));