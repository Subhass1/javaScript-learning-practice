// Use the += operator to add a number to a variable and log the result to the console.

let a = 5;
console.log(a += 2);

// Trying with function
function assignVariable(b){
    return b += 2;
}
let b = 5;
let result = assignVariable(b);
console.log(result);