// Use a switch statement to print the day of the week for a given number (1 = Monday, 2 = Tuesday, etc.).

let days = parseInt(prompt("Enter the days between (1 - 7): "));

switch (days) {
  case 1:
    console.log("The day is sunday.");
    break;

  case 2:
    console.log("The day is Monday.");
    break;

  case 3:
    console.log("The day is Tuesday.");
    break;

  case 4:
    console.log("The day is Wednesday.");
    break;

  case 5:
    console.log("The day is Thursday.");
    break;

  case 6:
    console.log("The day is Friday.");
    break;

  case 7:
    console.log("The day is Saturday.");
    break;

    dafault: console.log("Enter the valid days between (1 - 7): ");
}
