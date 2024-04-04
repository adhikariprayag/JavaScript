/*---

FUNCTIONS

- declare
- () Praenthesis: Parameters
- logic
- invoke

---*/

//declare
function myFunction(/*Parameter Goes here*/){
    //logic
    console.log('Hello 1');
    console.log('Hello 2');
    console.log('Hello 3');
}

//invoke - access proper name with parenthesis
myFunction();

//Can be used as much as possible
myFunction();
myFunction();

/*---

PARAMS - when declare/define
- local placeholders, local vars

ARGUMENT - when invoke/call/run

---*/

function friends(name){
    console.log('Hello'+" "+ name);
}

friends(); //Undefined
friends("Ram"); 

let bestFriend = "Hari";
friends(bestFriend); 

const fruits = ['Apple', 'Banana', 'Orange', 'Melon', 45, undefined, null]

//has only one placeholder so it doesn't show up (add 2 params to print)
friends(fruits[2], fruits[0]); 

/*---

RETURN

- default undefined, shortcuts, ignores after

---*/

// Qn: 1 Inch 2.54cm

const wallHeight = 80;

function cal(value){
    console.log('Value in cm is: ' + (value * 2.54) + ' cm');
}

cal(2); // = 5.08

//This also prints
const width = cal(1); // = 2.54
const height = cal(wallHeight); // = 203.2 pulls from line 61

//Prints undefined
const dimen = [width, height];
console.log(dimen);

function calculate(val){
    // const newValue = val * 2;
    // return  newValue;
    return val * 2;

    //Typing anything after return is not interpreted
}

const w = calculate(1);
const h = calculate(2);
const mainValue = [w, h];

console.log(mainValue);

