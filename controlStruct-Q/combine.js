// write a program to check if a year is leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2024;
let isLeapYear = (year % 4 == 0 && (year % 100 !== 0 || year % 400 === 0));

if(isLeapYear){
    console.log(`${year} is a leap year.`)
} else{
    console.log(`${year} is not leap year.`)
}