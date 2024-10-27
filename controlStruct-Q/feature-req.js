// write a script to check if a year is leap year using multiple conditions and log the result.

function leapYear(year) {
  if (year % 4 == 0) {
    if (year % 100 !== 0) {
      if (year % 400 == 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

let year = 2019;
let isLeapYear = (year % 4 == 0 && (year % 100 !== 0 || year % 400 === 0));

if(isLeapYear){
    console.log(`${year} is a leap year.`)
} else{
    console.log(`${year} is not leap year.`)
}
