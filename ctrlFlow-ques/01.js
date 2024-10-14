// If-else basics: Write a program that checks if a number is positive, negative, or zero.
let num = prompt("Enter any numbers to check: ");

if(num === 0){
    console.log(`${num} is a Zero.`);

} else if (num < 0 ){
    console.log(`${num} is a Positive Number.`);

} else if(num > 0){
    console.log(`${num} is a Negative number.`);

} else{
    console.log(`${num} this is not valid number.`)
}
