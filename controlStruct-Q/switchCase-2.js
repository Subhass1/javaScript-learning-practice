// write a program that uses a switch case that assigns a grade  (A, B, C, D) based on a score and log the grade to the console.



function gradeNumber(grade){

    if (grade <= 100 && grade >= 90 ){
        console.log("You got A+")
    } else if(grade < 90 && grade >= 80){
        console.log("You got grade A")
    } else if(grade < 80 && grade >= 70){
        console.log("You got grade B+")
    }else if(grade < 70 && grade >= 60){
        console.log("You got grade B")
    }else if(grade < 60 && grade >= 50){
        console.log("You got grade C+")
    }else if(grade < 50 && grade >= 40){
        console.log("You got grade C")
    }else if(grade < 40 && grade >= 0){
        console.log("You are fail.")
    }else{
        console.log("Invalid grade")
    }

}

gradeNumber(58);