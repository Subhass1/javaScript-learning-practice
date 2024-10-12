// ✍️✍️Globla variables✍️✍️
let globalVar = "I am Global Variables";

function displayGlobal () {
   // console.log(globalVar); //Accessible here (Global Variables)
}

displayGlobal ();
// console.log(globalVar); //Acessible here too

// ✍️✍️Local Variables : function scope✍️✍️
function myFunction(){
    let localVar ="I am local variables";
    //console.log(localVar); // This is acccessible.
}

myFunction();
//console.log(localVar); //Giving refrence error : LocalVar is not defined


// ✍️✍️One most important examples to learn ✍️✍️
function outerFunction (){
    let outerVar = "I am outside."

    function innerFunction (){
        let innerVar = "I am inside."
        //console.log(outerVar);  //This is accessible.
       // console.log(innerVar);  // This is also accessible
    }

    innerFunction();
}

outerFunction();


// ✍️✍️Variables declaration and scope ✍️✍️
/* ⇉ The way you declare variables affects their scope.

   var
 ⇉ Function Scope: Variables declared with var are scoped to the nearest function block.
 ⇉ Hoisting: var declarations are hoisted to the top of their scope and initialized with 
   undefined.
*/
// Examples
function varExample () {
 console.log(x);  // undefined

 var x = 10;
 console.log(x);  //output = 10;
}

varExample();

// ✍️✍️Hoisting and Scope ✍️✍️
/*  
  ⇉ Hoisting is JavaScript's default behavior of moving declarations to the top of their 
      containing scope during the compilation phase.

  ⇉ var: Hoisted and initialized with undefined.
  ⇉ let and const: Hoisted but not initialized. Accessing them before declaration results in a 
     ReferenceError.
*/

console.log(subhas);
var subhas = ("My name is subhash");  // undefined

console.log(yadav);
let yadav = ("my caste is yadav");  // It shows refrence error