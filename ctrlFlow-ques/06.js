// Assign a letter grade based on a numerical score using if-else statements (e.g., 90-100: A, 80-89: B, etc.).

let mark = parseInt(prompt("Enter your marks to know Grade: "));

if(mark >= 90 && mark <= 100){
    console.log("You got A+");

}else if(mark >= 80 && mark < 90){
    console.log("You got A");

}else if(mark >= 70 && mark < 80){
    console.log("You got B+");

}else if(mark >= 60 && mark < 70){
    console.log("You got B");

}else if(mark >= 50 && mark < 60){
    console.log("You got C+");

}else if(mark >= 40 && mark < 50){
    console.log("You got C");

}else if(mark >= 0 && mark < 40){
    console.log("You are fail.");

}else{
console.log("Please enter valid numberbetween (0 to 100) ");
}