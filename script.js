// create function getComputerChoice: randomly return Rock, Paper, or Scissors

//need it to pick one of three options, array?

function getComputerChoice() {

    const randomNumber = Math.floor(Math.random() * 3 + 1);

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

//must create a playerSelection function that accepts all forms of capitalization for their answer
//prompt user for input (R,P,S)
//attach this response to a variable within the function
//return a message correcting them if they do not put in some form of rock, paper, or scissors

function getPlayerChoice() {
    userChoice = prompt('Please enter your choice');
    upperChoice = userChoice.toUpperCase();
    return upperChoice
}


function playRound(computerSelection, playerSelection) {
    if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS' || playerSelection === 'PAPER' && computerSelection=== 'ROCK' || playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        return(`You win! ${playerSelection} beats ${computerSelection}!`);
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER' || playerSelection === 'PAPER' && computerSelection === 'SCISSORS' || playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        return (`You lose! ${computerSelection} beats ${playerSelection}!`);
    } else if (playerSelection === 'ROCK' && computerSelection === 'ROCK' || playerSelection === 'PAPER' && computerSelection === 'PAPER' || playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS') {
        return (`It's a tie! Both players chose ${playerSelection}.`)
    }
    else {
        return ('Your choice is unrecognized. Please enter Rock, Paper, or Scissors.');
    }
}

//create a function that plays the user against the computer

const computerSelection = getComputerChoice()
const playerSelection = getPlayerChoice()

//console.log(playRound(computerSelection, playerSelection))

function playGame() {
    let round = playRound(computerSelection, playerSelection)
    
    console.log(round);
    console.log(round);
    console.log(round);
    console.log(round);
    console.log(round);
}
console.log(playGame());