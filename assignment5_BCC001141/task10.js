var string = prompt("Please enter a String:");

function countVowel(str){
    str = str.split("");
    var vowelCount = 0;
    for (var i=0; i<str.length; i++){
        if (str[i].toLowerCase() == "a" || str[i].toLowerCase() == "e" || str[i].toLowerCase() == "i" || str[i].toLowerCase() == "o" || str[i].toLowerCase() == "u"){
            vowelCount++;
        }
    }
    return vowelCount;
}

console.log("Your string is: " + string);
console.log("Your string has " + countVowel(string) + " Vowels.");