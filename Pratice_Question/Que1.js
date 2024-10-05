/*
Write a JavaScript program to display the current day and time in the following format.
Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/

function displayDateTime() {
    const dayofWeek = ["Sunday","Monday","Tuesday","Wednesday","Friday","Saturday"]
}

//Get the current Date and Time
const now = new Date ();
const day = daysofWeek[now.getDay()];
let hour = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

 // Determine AM or PM and adjust the hour
 const AmPm = hour >= 12 ? "PM" : "AM";
 hour = hour % 12;
 hour = hour ? hour : 12;  // Adjust 0 hour to 12 for midnight

  // Format time with leading zeros for minutes and seconds if needed
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

   // Display the formatted day and time
   const currentTime = `Today is : ${day}.
   Current time is : ${hour} ${AmPm} : ${formattedMinutes} : ${formattedSeconds}`;
       console.log(currentTime);
   
   
   displayDateTime();