// write a program to add two numbers and log the result to the console.

function addTwoNumbers(num1, num2){

return num1 + num2;
 
}

let num1 = 20;
 let num2 = 30;
let addition = addTwoNumbers(num1, num2);
console.log("The sum of Number: " +  addition  );

// now another method
function addNumbers(a, b){
    let sum = a + b;
    console.log(`The sum of a: ${a}, and b:${b} is = `+ sum);
}

addNumbers(10, 20);