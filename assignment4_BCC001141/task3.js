var isPasswordValid = false;
var containsAlpha = false;
var containsNumerical = false;
var startsWithChar = false;
var isLengthValid = false;

var password = prompt("Please enter a password: ");
var passwordArray = password.split("");
evaluatePassword(passwordArray);

do{
    if(!isLengthValid){
        password = prompt("Please enter at least 8 alpha-numerical characters:");
        passwordArray = password.split("");
        evaluatePassword(passwordArray);        
    }
    if(!startsWithChar){
        password = prompt("First Character can't be a NUMBER. Please enter a new password:");    
        passwordArray = password.split("");
        evaluatePassword(passwordArray);
    }
    if (!containsAlpha || !containsNumerical){
        password = prompt("Password must contain Alphabets as well as Numbers. Please enter a new password:");
        passwordArray = password.split("");
        evaluatePassword(passwordArray);        
    }
    if (containsNumerical && containsAlpha && startsWithChar && isLengthValid){
        isPasswordValid = true;
    }
}while(!isPasswordValid)

function evaluatePassword(passwordArray){
    if (passwordArray.length >= 8){
        isLengthValid = true;
        if(parseInt(passwordArray[0])>=0 && parseInt(passwordArray[0])<=9){
            // startsWithChar = false;
            // break;
        }else{
            startsWithChar = true;
            for (var i=0; i<passwordArray.length; i++){
                if(isLetter(passwordArray[i])){
                    containsAlpha = true;
                }
                if(parseInt(passwordArray[i])>=0 && parseInt(passwordArray[i])<=9){
                    containsNumerical = true;
                }
            }
        }
    }
}

console.log("startsWithChar = " + startsWithChar);
console.log("isLengthValid = " + isLengthValid);
console.log("containsAlpha = " + containsAlpha);
console.log("containsNumerical = " + containsNumerical);

function isLetter(c){
    return c.toLowerCase() != c.toUpperCase();
}
// console.log(isLetter("#"));