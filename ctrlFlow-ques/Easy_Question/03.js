// Write a function that returns the factorial of a given number.



function factorial (num){
    let result = 1;
    for (let i = 2; i<=num; i++){
        result *= i;
    }
    return result;
}

let num = parseInt(prompt("Enter Numbers for Factorial: "));

console.log(factorial(num));