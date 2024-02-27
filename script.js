// global variables for user score?
let userScore = 0
let computerScore = 0

// generates computer choice randomly
function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    switch (randomNumber) {
        case 1:
            return 'ROCK';
            break;
        case 2:
            return 'PAPER';
            break;
        case 3:
            return 'SCISSORS';
            break;
    }
}

// prompts user for their choice
function getPlayerChoice() {
    let userChoice = prompt('Please enter your choice');
    let upperChoice = userChoice.toUpperCase();
    return upperChoice
}

// calls the above get functions to define variables for the next funciton


// function to play a singular round, need to work on score keeping
function playRound(computerSelection, playerSelection) {
    if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS' || playerSelection === 'PAPER' && computerSelection === 'ROCK' || playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`)
        return userScore++;
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER' || playerSelection === 'PAPER' && computerSelection === 'SCISSORS' || playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        console.log((`You lose! ${computerSelection} beats ${playerSelection}!`));
        return computerScore++;
    } else if (playerSelection === 'ROCK' && computerSelection === 'ROCK' || playerSelection === 'PAPER' && computerSelection === 'PAPER' || playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS') {
        console.log( `It's a tie! Both players chose ${playerSelection}.`);
    }
    else {
        return ('Your choice is unrecognized. Please enter Rock, Paper, or Scissors.');
    }
}

// helper functions, what do I need? if..else for when game is over to determine winner 
function gameOver(){
    if(computerScore > userScore) {
        console.log(`You lose! The computer won ${computerScore} rounds.`);
    } else if (userScore > computerScore) {
        console.log(`You win! You won ${userScore} rounds to the computer's ${computerScore}`);
    } else {
        console.log('It is a tie! How did you manage that?');
    }
}





// 5 round game that keeps track of scores and declares winner at the end 
function playGame() {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    playRound(computerSelection, playerSelection);
    console.log(`Your score is ${userScore}. The computer's score is ${computerScore}`);
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    playRound(computerSelection, playerSelection);
    console.log(`Your score is ${userScore}. The computer's score is ${computerScore}`);
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    playRound(computerSelection, playerSelection);
    console.log(`Your score is ${userScore}. The computer's score is ${computerScore}`);
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    playRound(computerSelection, playerSelection);
    console.log(`Your score is ${userScore}. The computer's score is ${computerScore}`);
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    playRound(computerSelection, playerSelection);
    console.log(`Your score is ${userScore}. The computer's score is ${computerScore}`);
    
    gameOver();
}

playGame();