var number = prompt("Enter amount to withdraw: ");
console.log(number);

var numberOf100 = parseInt(number / 100);
console.log(numberOf100);

var remainder = number - (numberOf100*100);
console.log(remainder);

var numberOf50 = parseInt(remainder / 50);
// var numberOf50 = parseInt((number % (numberOf100*100)) / 50);
console.log(numberOf50);

remainder = remainder - (numberOf50*50);
console.log(remainder);

var numberOf10 = parseInt(remainder / 10);
// var numberOf50 = parseInt((number % (numberOf100*100)) / 50);
console.log(numberOf10);

console.log();
console.log();
console.log();

console.log("You will have " + numberOf100 + " Hundered Rupee Notes, " + numberOf50 + " Fifty Rupee Notes, and " + numberOf10 + " Ten Rupee Notes.");
