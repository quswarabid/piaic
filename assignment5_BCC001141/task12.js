var randomNumber = parseInt((Math.random()*100) + 1);
console.log(randomNumber);
var turns = 0;

startGame();

function startGame(){
    while(turns<3){
        var guess = parseInt(prompt("Please enter a number between 1 and 100: "));
        if(guess === randomNumber){
            console.log("You are Right, and You Won!");
            alert("You are Right, and You Won!");
            wannaPlayAgain();
            break;
        }else{
            console.log("Incorrect, Please try again");
            alert("Incorrect, Please try again");
        }
        turns++;
    }
    if(turns>=3){
        console.log("You LOSE!");
        alert("You LOSE!");
        resetTurns();
        updateRandom();
        wannaPlayAgain();
    }
}

function wannaPlayAgain(){
    var wannaPlay = prompt("Wanna Play Again? Answer with YES/NO:");
    if (wannaPlay.toLowerCase() == "yes"){
        restartGame();
    }else if (wannaPlay.toLowerCase() == "no"){
        endGame();
    }else{
        console.log("else!");
    }
}


function endGame(){
    updateRandom();
    resetTurns();
    alert("Thank you for playing with us today!");
    console.log("Thank you for playing with us today!");
}

function resetTurns(){
    turns = 0;
}
function updateRandom(){
    randomNumber = parseInt((Math.random()*100) + 1);
    console.log("New Random = " + randomNumber);
}

function restartGame(){
    resetTurns();
    updateRandom();
    startGame();
}