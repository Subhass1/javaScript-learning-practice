// write a program to calculate the factorial of a number using a do...while.
function factorial (num){

    if (num < 0) return "Factorial is not defined for negative numbers";
    let result = 1;
    let i = num;

    do{
        result *= i;
        i--;

    }while(i > 0);

    return result;
}

console.log(factorial(5));