// Write a program to multiply two numbers and log the result to the console.

function multiplyNumbers(num1, num2){
    return num1 * num2;
}

let num1 = 4;
let num2 = 5;
let multiply = multiplyNumbers(num1, num2 );
console.log(`The multiplication of two numbers is num1: ${num1}, num2: ${num2} = ` + multiply);

// Another Method

function multiplication(a, b){
    let multiplication = a * b;
    console.log(`The multiplication of two numbers is a: ${a}, b: ${b} = ` + multiplication)
}

multiplication(20, 20);

