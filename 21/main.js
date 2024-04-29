/*---
    MATH OBJECTS

    -- Standard built-in objects -> always available
---*/

const num = 4.56789;
const result = Math.floor(num);

console.log(result);

console.log(Math.ceil(num));
console.log(Math.sqrt(9));

console.log(Math.PI);
console.log(Math.min(1, 2, 0, 5, -2));
console.log(Math.max(1, 2, 0, 5, -2));

const rnd = Math.random() * 10; /*Initially gives no. form 0 to 0.999*/
console.log(rnd);

const rnd1 = Math.floor(Math.random() * 10 + 1); /*Gives 0 to 9, use ceil or add 1 to get 0 to 10*/
console.log(rnd1);

/*---
    DATE OBJECTS
---*/
const months = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sept',
    'oct',
    'nov',
    'dec'
]

const days = [
    'sun',
    'mon',
    'tue',
    'wed',
    'thu',
    'fri',
    'sat'
]


const date = new Date();
console.log(date.getFullYear());

const month = date.getMonth();
console.log(months[month]);

const day = date.getDay();
console.log(days[day])

const setDate = new Date('1/12/2001');
console.log(`date: ${setDate.getDate()}, month: ${setDate.getMonth()}, year: ${setDate.getFullYear()}`);

const sentence = `${days[day]}, ${date.getDate()}, ${months[month]}, ${date.getFullYear()}`;
document.body.innerHTML = `<h1> ${sentence} </h1>`;