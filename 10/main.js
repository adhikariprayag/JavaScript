/*--- 

OBJECTS

- key/value pairs methods
- dot notation

---*/

//Create Objs
//Add prop
//Add comma bet values

const person = {
    name: "Ram",
    lastName: 'Shrestha',
    male: true,
    age: 40,
    siblings : ['Hari', 'Hanuman', 'Sita'],
    greeting: function (){
        console.log('Hello my name is Ram');
    },

    //ES6
    hello(){
        console.log('hello');
    }
}

console.log(person);

//Accessing individual props
console.log(person.name);
person.greeting();

const age = person.age;
console.log(age);

person.name = 'bob';
console.log(person.name);