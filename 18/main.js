/*---

    URNARY OPERATOR - typeof
    - has only operand

    BINARY OPERATOR - assignment
    - declaration & assignment

    TERNARY OPERATOR
    - condition ? (runs if true) : (runs if false)
---*/

const value = 2 > 1;

if(value){
    console.log('true');
}
else{
    console.log('flse');
}

const check = value ? 'true value' : 'false value';
console.log(check);

3 < 1 ? console.log('tru') : console.log('flse');