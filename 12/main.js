/*---

LOGICAL OPERATORS

- || : OR
- && : AND
- ! : NOT

if
else if
else

---*/

const user = 'Ram', age = '24';

if(age === 24 || user === 'ram' ){
    console.log('hello');
}
else{
    console.log('false')
}

//Ram should have same typo

if(age === 24 && user === 'ram' ){
    console.log('hello');
}
else{
    console.log('false')
}