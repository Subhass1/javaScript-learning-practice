// Write a program to subtract to two numbers and log the result to the console.

function subtractNumbers(num1, num2){
    let subtract = num1 - num2;
    console.log(`the subtract of two numbers a:${num1} and b:${num2} is = ` + subtract);
}

subtractNumbers(20, 10);  

// from another Method 

function subtract(a, b){
    return a - b;
}

let a = 60;
let b = 40;
let subtracts = subtract(a, b);
console.log(`The subtraction of two numbers a: ${a}, b: ${b} = ` + subtracts);