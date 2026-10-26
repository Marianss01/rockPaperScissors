/*
getComputerChoice: 
By drawing a random number between 0 and 3,
if the drawn number is less than 1, the computer will choose "Rock";
if it is between 1 and 2, the computer will choose "Paper";
and finally, if it is between 2 and 3, it will choose "Scissors."
*/

function getComputerChoice() {
    
    let extractedNum = Math.random() * 3;
    if (extractedNum < 1) {
        return "rock";
    }
    else if (extractedNum >= 1 && extractedNum < 2) {
        return "paper";
    }
    else {
        return "scissors"
    }
}


/*
PSEUDOCODE getHumanChoice function:
GET user's input through prompt
RETURN the value lowered in characters
*/

function getHumanChoice () {

    let input = prompt("What's your choice? (Rock/Paper/Scissors): ");
    return input.toLowerCase();
}
