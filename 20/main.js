/*--

POWERFULL ARRAY METHODS

forEach, map, filter, find, reduce
Iterate over array - no for loop required

Accept CALLBACK function as an argument, calls callback against each item in
an array. Reference item in the callback Paramater.

--*/

const numbers = [0, 1, 2, 3];

// show all numbers

for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

/*-- 
    FOR EACH

    does not return new array

    - iterates over the array

--*/

const people = [
    {name: 'bob', age: 20, position: 'dev', id: 1, salary: 300 },
    {name: 'peter', age: 22, position: 'design', id: 2, salary: 500},
    {name: 'Ram', age: 40, position: 'CEO', id: 3, salary: 800},
];

function showPerson(person){
    console.log(person.position.toUpperCase());
}

//no loop required
people.forEach(showPerson);

people.forEach(
    function(item){
        console.log(item.name.toUpperCase());
    }
)

/*-- 
    MAP

    - does not return new array
    - does not change size of original array
    - uses values from original array when making new one

--*/

// const ages = people.map(function(age){
//     console.log(age);
//     return 'Hello World';
// })

const ages = people.map(function(person){
    return person.age + 20;
})
console.log(ages);

const newPeople = people.map(function(person){
    return {
        firstName:person.name.toUpperCase(),
        oldAge: person.age + 10,
    }
})
console.log(newPeople);

const inner = people.map(function(person){
    return `<h1>${person.name}</h1>`;
})
document.body.innerHTML = inner.join('');

/*-- 
    FILTER

    - does not return new array
    - can manipulate the size of new array
    - returns based on conditions

--*/

const youngPeople = people.filter(function(person){
    return person.age <= 25;
})
console.log(youngPeople);

const post = people.filter(function(person){
    return person.position === 'dev';
})
console.log(post);

/*-- 
    FIND

    - returns single instance - (in this case object)
    - returns first match, if no match undefined -> paila jun paincha tei, not good for repeating value
    - great for getting unique values

--*/

const id = people.find(function(person){
    return person.id === 3;
})
console.log(id);
console.log(id.name);

//DIFFERENCE WITH FILTER
const person2 = people.filter(function(person){
    return person.id === 1;
})
console.log(person2);
console.log(person2[0].position);


//USING FOR ARRAY
const fnames = ['bob', 'peter', 'john'];

console.log(fnames.find(function(name){
    return name === 'bob';
}))


/*-- 

    REDUCE

    - iterates, callback function
    - reduces to a single value - number, array, object
    - 1 parameter ('acc') - total of all calculations
    - 2 prameter ('curr') - current interation/value

--*/
console.log("REDUCE");

const total = people.reduce(function(acc, currItem){
    console.log(`total ${acc}`);
    console.log(`current money: ${currItem.salary}`);
    acc += currItem.salary;
    return acc; /*Always return accumulator */
}, 1)

console.log(total);