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

let computerScore = 0;
let humanScore = 0;

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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanSelection, computerSelection) {
    // All selections in which the user wins the round
    if ((humanSelection === 'rock' && computerSelection === 'scissors') ||
        (humanSelection === 'paper' && computerSelection === 'rock') || 
        (humanSelection === 'scissors' && computerSelection === 'paper')) {
            humanScore++;
            console.log(`You won! ${humanSelection} beats ${computerSelection}\nYour score: ${humanScore}, Computer score: ${computerScore}`);
    }
    else if ((humanSelection === 'scissors' && computerSelection === 'rock') ||
            (humanSelection === 'rock' && computerSelection === 'paper') || 
            (humanSelection === 'paper' && computerSelection === 'scissors')) {
                computerScore++;
                console.log(`You lost! ${computerSelection} beats ${humanSelection}\nYour score: ${humanScore}, Computer score: ${computerScore}`);
    }
    else {
        console.log(`It's a draw! Your score: ${humanScore}, Computer score: ${computerScore}`);
    }
}

playRound(humanSelection, computerSelection);