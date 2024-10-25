// Write  a program to divide two numbers and log the result to the console.

function remainderNumbers(num1, num2){
    let remainder = num1 / num2;
    console.log(`The reaminder of num1:${num1} & num2:${num2} is =` + remainder);
}

remainderNumbers(10, 3);

// another method
function remainder(a, b){
    return a / b;

}

let a = 10;
let b = 2;
let findremainder = remainder(a, b);
console.log(`The reaminder of a:${a} & b:${b} is = ` + findremainder)