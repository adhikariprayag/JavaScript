/*---

    LOOPS

- repeatedly run a block of code while condition is true

--- TYPES ---

- While Loop
- do while loop
- for loop

---*/

// --- WHILE LOOP ---

// const amt = 10;
let amt = 10;

while(amt > 0){
    console.log('I have ' + amt + '$ ');
    amt--;
}

//once the amt reaches not greater than 0 the loop ends
// line 18 is breakout condition to end endless loop

/* 

    --- DO WHILE LOOP ---

    - code block first condition second
    - runs atleast once

*/

let money = 0;

do{
    console.log(money);
    money ++;
}
while(money < 10);

/* 

    --- FOR LOOP ---

    - initiate; end value; what to do

*/

let i;

for (i = 0; i < 10; i ++ ){
    console.log('for ' + i);
}


for (let num = 11; num >= 0; num--){
    console.log(num);
}