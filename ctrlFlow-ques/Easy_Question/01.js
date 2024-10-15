// Write a program that prints numbers from 1 to 50. For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz"; for multiples of both, print "FizzBuzz".

for (let i = 1; i <= 50; i++){
    if(i%3 === 0 && i%5 === 0){
        document.write("FizzBuzz " + i + "<br>");
    } else if(i%3 === 0){
        document.write("Fizz " + i + "<br>");
    }else if(i%5 === 0){
        document.write("Buzz " + i + "<br>" );
    }else{
        document.write(i + "<br>");
    }
}