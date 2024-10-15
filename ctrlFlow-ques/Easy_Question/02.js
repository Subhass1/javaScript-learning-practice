// Calculate the sum of all numbers between 1 and a given number using a loop.
let num = parseInt(prompt("Enter numbers"));
let sum = 0;

for(let i = 1; i<=num; i+num){
    sum += i;
}
console.log("The sum of all numbers 1 to num: " + num + "is: " + sum);
