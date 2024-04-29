/*--
    Callback Functions, Higher Order Functions, 
    Functions as first class objects/Citizens

    Functions are first class objects - stored in variable (expression),
    passed as argument to another function, return from the function(closure)

    Higher Order Function - accepts another function as an argument or returns 
    another function as a result

    Callback Function - passed to another function as an argument &
    excuted inside that function

--*/

//Repetative so we use Callback function
function greetMorning(name){
    const myName = 'Ram';
    console.log(`Good Morning ${name}. My name is ${myName}`);
}

function greetAfternoon(name){
    const myName = 'Ram';
    console.log(`Good Afternoon ${name}. My name is ${myName}`);
}

greetMorning('Hari')
greetAfternoon('Sita')


//HIGHER ORDER FUNCTION
//CALLBACK FUNCTION

//CALLBACK FUNCTION

// function morning(){
//     console.log('Good Morning Bob')
//     return 'Good Morning Bob';
// }

function morning(name){
    return `Good Morning ${name.toUpperCase()}`;
}

function afternoon(name){
    return `Good Afternoon ${name.repeat(3)}`;
}

//HIGHER ORDER FUNCTION
function greet(name, cb){
    // cb()
    const myName = 'Ram';
    console.log(`${cb(name)}. My name is ${myName}`);
}

greet('Gita', morning)
greet('Feeta', afternoon)