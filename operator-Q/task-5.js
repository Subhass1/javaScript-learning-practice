// write a program to find remainder when one number is divided by another and log the result to the console.

function findRemainder(dividend, divisor){
    return dividend % divisor;
}

let dividend = 20;
let divisor = 3;
let remainder = findRemainder(dividend, divisor);
console.log(`The remainder of dividend: ${dividend} & divisor: ${divisor} = ` + remainder);


// Another Method
function findrem(oneNumber, anotherNumber){
    let rems = oneNumber % anotherNumber;
    console.log(`The remainder when ${oneNumber} is divided by ${anotherNumber} is : ${rems}`);
}

findrem(10, 3);