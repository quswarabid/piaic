function factorial(n){
    if (n<=1){
        console.log(n);
        return 1;
    }else{
        console.log(n);
        return n * factorial(n-1);
    }
}
var number = prompt("Please enter a number:");
var numFact = factorial(number);
console.log(numFact);
alert("Factorial of "+ number + " is " + numFact);