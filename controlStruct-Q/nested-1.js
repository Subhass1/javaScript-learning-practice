// write the program to find the largest of three numbers using the nested if-else statements.

function findLargest(num1, num2, num3){
    if (num1 >= num2){
        if(num2 >= num3){
            console.log("The largest number is " + num1);
        }else{
            console.log("The largest number is " + num3);
        }

    } else{
        if(num2 >= num3){
            console.log("The largest number is " + num2);
        }else{
            console.log("The largest number is " + num3)
        }

    }
}

findLargest(20, 30, 50);