/*--- 

SWITCH STATEMENTS

- concise syntax

switch(condition){
    case 1:
        result;
        break;

    case 2:
        result;
        break;

    ---
    default:
        result;
}

- break keyword is needed cause js will keep on running all cases 
- default -> fall back value

---*/ 

const dice = 1;

switch (dice){
    case 1:
        console.log('1');
        break;

    case 2:
        console.log('2');
        break;

    default:
        console.log('false value');
}