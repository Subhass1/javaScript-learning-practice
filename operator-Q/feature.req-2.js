// create the script that compares two number using different comparision operators and combine conditons using logical operators, logging the result.

function comparisionOperator(a, b){
    console.log("greater than " + (a > b || a < b) );
    console.log("greater tha equal " + (a >= b || a <= b) );
    console.log("strict not equal  " + (a !== b && a != b) );
    console.log("logical Not " + !(a + b) );
}

comparisionOperator(20, 30);