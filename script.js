// global variables for user score? --   this is fine
let userScore = 0
let computerScore = 0



// generates computer choice randomly --   this is fine
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



// Event listener calls on the playRound function and assigns value to computerSelection variable based on output of getComputerChoice
let userChoice = document.querySelector('#container');
userChoice.addEventListener('click', (event) => {
    let target = event.target;
    let playerSelection;
    switch (target.id) {
        case "rock":
            playerSelection = "ROCK";
            break;
        case "paper":
            playerSelection = "PAPER";
            break;
        case "scissor":
            playerSelection = "SCISSORS";
            break;

    }
    let computerSelection = getComputerChoice();


    playRound(computerSelection, playerSelection);
    document.querySelector('#total').textContent = `User Score: ${userScore}   Computer Score: ${computerScore}`; //fills in the total score div
});



// function to play a singular round, need to work on score keeping  -- modded to fill in div showing round score

function playRound(computerSelection, playerSelection) {

    if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS' || playerSelection === 'PAPER' && computerSelection === 'ROCK' || playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        document.querySelector('#round').textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
        return userScore++;
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER' || playerSelection === 'PAPER' && computerSelection === 'SCISSORS' || playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        document.querySelector('#round').textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
        return computerScore++;
    } else if (playerSelection === 'ROCK' && computerSelection === 'ROCK' || playerSelection === 'PAPER' && computerSelection === 'PAPER' || playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS') {
        document.querySelector('#round').textContent = `It's a tie! Both players chose ${playerSelection}.`;
    };
}



// helper functions, what do I need? if..else for when game is over to determine winner <- unchanged and unused for this part
function gameOver() {
    if (computerScore > userScore) {
        console.log(`You lose! The computer won ${computerScore} rounds.`);
    } else if (userScore > computerScore) {
        console.log(`You win! You won ${userScore} rounds to the computer's ${computerScore}`);
    } else {
        console.log('It is a tie! How did you manage that?');
    }
}





// 5 round game that keeps track of scores and declares winner at the end 
