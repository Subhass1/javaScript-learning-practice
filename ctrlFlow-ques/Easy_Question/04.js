// Check whether a number is prime or not.

let num = parseInt(prompt("Enter number to find prime number: "))
function isPrime(){
    if(num <= 1){
        console.log(`${num } is not prime number`);
    } else if(num <= 3){
        console.log(`${num} is a prime number`)
    } else if(num % 2 === 0 || num % 3 === 0){
        console.log(`${num} is not prime number`)
    }
}