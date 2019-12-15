var passedString = prompt("Please enter a string to be judged:");

// var isPalindrome = false;

function isPalindrome(someString){
    var newString = someString;
    console.log(newString);
    //reverse the string
    newString = newString.split("");
    console.log(newString);
    newString = newString.reverse();
    console.log(newString);
    newString = newString.join("");
    console.log(newString);

    //compare the string
    if (someString == newString){
        // isPalindrome = true;
        return true;
    }else{
        return false;
    }
}

if (isPalindrome(passedString)){
    alert("Yeah, this string \"" + passedString + "\" is a palindrome.");
}else{
    alert("No, this string \"" + passedString + "\" is not a palindrome.");
}