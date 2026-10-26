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

/*
PSEUDOCODE playRound function:
GET user's choice by calling getHumanChoice
GET computer's choice by calling getComputerChoice
IF player wins
    THEN updates userScore and announces the result
ELSE IF computer wins
    THEN updates computerScore and announces the result
ELSE 
    annunces the draw
*/

/*
PSEUDOCODE playGame procedure:
INIT humanScore and computerScore
FOR 5 times
    CALL playRound
    DISPLAY round result message and actual scores
ENDFOR
DISPLAY final scores
*/

function playGame() {

    let computerScore = 0;
    let humanScore = 0;

    function playRound(humanSelection, computerSelection) {
    // All selections in which the user wins the round
        if ((humanSelection === 'rock' && computerSelection === 'scissors') ||
            (humanSelection === 'paper' && computerSelection === 'rock') || 
            (humanSelection === 'scissors' && computerSelection === 'paper')) {
                humanScore++;
                return(`You won! ${humanSelection} beats ${computerSelection}\nYour score: ${humanScore}, Computer score: ${computerScore}`);
        }
        else if ((humanSelection === 'scissors' && computerSelection === 'rock') ||
                (humanSelection === 'rock' && computerSelection === 'paper') || 
                (humanSelection === 'paper' && computerSelection === 'scissors')) {
                    computerScore++;
                    return(`You lost! ${computerSelection} beats ${humanSelection}\nYour score: ${humanScore}, Computer score: ${computerScore}`);
        }
        else {
            return(`It's a draw! Your score: ${humanScore}, Computer score: ${computerScore}`);
        }
    }
    
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        alert(playRound(humanSelection, computerSelection));
    }

    // Announce final results
    if (humanScore > computerScore) {
        alert(`You won the game! Your final score: ${humanScore}, Computer final score: ${computerScore}.`);
    }
    else if (computerScore > humanScore) {
        alert(`You lost the game! Computer final score: ${computerScore}, your final score: ${humanScore}.`);
    }
    else {
        alert(`Game finish in draw! Your score and computer's: ${humanScore}.`);
    } 

}

playGame();