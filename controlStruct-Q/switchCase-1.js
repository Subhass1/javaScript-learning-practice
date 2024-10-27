// write a program that uses a switch case that determine the day of the week based on a number (1 - 7) and log the result to the console.

let weekDays = 6;

switch (weekDays) {
  case 1:
    console.log(`${weekDays} is a Sunday`);
    break;
  case 2:
    console.log(`${weekDays} is a Monday`);
    break;
  case 3:
    console.log(`${weekDays} is a Tuesday`);
    break;
  case 4:
    console.log(`${weekDays} is a Wednesday`);
    break;
  case 5:
    console.log(`${weekDays} is a Thursday`);
    break;
  case 6:
    console.log(`${weekDays} is a Friday`);
    break;
  case 7:
    console.log(`${weekDays} is a Saturday`);
    break;
  default:
    console.log("Enter valid week days between (1 - 7) ");
}
