// Simulate a traffic light using switch-case to display actions based on color input (e.g., "red" -> "Stop").

let color = prompt("Enter color (red, green, yellow: ");

switch (color) {
  case "red":
    console.log("Stop");
    break;

  case "green":
    console.log("Go");
    break;

  case "yellow":
    console.log("Be ready to go");
    break;

  default:
    console.log("Invalid color! (Please enter valid color)");
}
