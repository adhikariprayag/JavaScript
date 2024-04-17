/*---  ---*/

// Arrays & For Loops

const fNames = ['Ram', 'Hari', 'Sita'];
const lName = 'Babu';
const newArray = [];

for (let i = 0; i < fNames.length; i++) {
    console.log(i);
    console.log(fNames[i]);
    newArray.push(`${fNames[i]} ${lName}`)
}

console.log(newArray);


//Functions, return, if, arrays, for loop

const gas = [10, 20, 30];
const food = [30, 40, 50, 60];

function calculate(arr) {
    // console.log(arr.length);
    let total = 0;

    for (let j = 0; j < arr.length; j++) {
        // console.log(arr[j]);
        total += arr[j];
    }

    if (total > 100) {
        console.log('spent more');
        return total;
    }
    else {
        console.log('spent less')
    }
    
    return;
}

const final2 = calculate(food)
console.log(final2)

const final = calculate(gas);
console.log(final)

