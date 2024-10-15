// If-else basics: Write a program that checks if a number is positive, negative, or zero.
let num = parseInt(prompt("Enter any numbers to check: "));

if(num === 0){
    document.write(`${num} is a Zero.`);

} else if (num > 0 ){
    document.write(`${num} is a Positive Number.`);

} else if(num < 0){
    document.write(`${num} is a Negative number.`);

} else{
    document.write(`${num} this is not valid number.`)
}
