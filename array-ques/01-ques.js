// ✍️ Create an array of 5 numbers and log the third number in the console.
let array = [10, 20, 30, 40, 50];
// console.log(array[2]);

// ✍️ Add a number to the end of the array and log the updated array.
 array.push(60);
// console.log(array);
// console.log(array[5]);

//Remove the first element from an array and log the updated array.
array.shift();
//console.log(array);


// ✍️ Find the Length of an Array
//console.log(array.length);

// ✍️ Pratice more array methods unshift(), slice()
array.unshift(5);
console.log(array);

//✍️ slice() array method

// ✍️splice() array Method
 // ➡️removing 1 element at index 1
 //array.splice(0,3); // Here, 0 indicates index and 3 indicates elements removing.
 //console.log(array);

 //➡️Adding elements
 array.splice(0,3, 6, 7, 8,);
 console.log(array);