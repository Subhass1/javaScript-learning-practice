//Write a function that checks if a given number is even or odd.

function oddEven(){
    if(num %2 == 0){
        document.write(`${num} is a Even Number.`);
    }else{
        document.write(`${num} is a Odd Number.`);
    }
}
let num = parseInt(prompt("Enter any number to find odd or even: "));
oddEven();