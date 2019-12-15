var stringChar = prompt("Please enter a String Character:");

function isVowel(str){
    if (str.toLowerCase() == "a" || str.toLowerCase() == "e" || str.toLowerCase() == "i" || str.toLowerCase() == "o" || str.toLowerCase() == "u"){
        return true;
    }else{
        return false;
    }
}
if (isVowel(stringChar)){
    console.log("Your string character is: " + stringChar + " and it is a VOWEL.");
}else{
    console.log("Your string character is: " + stringChar + " and it is NOT A VOWEL.");
}