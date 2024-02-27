// create function getComputerChoice: randomly return Rock, Paper, or Scissors

//need it to pick one of three options, array?

function getComputerChoice() {

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    switch (randomNumber) {
        case 1:
            return 'Rock';
            break;
        case 2:
            return 'Paper';
            break;
        case 3:
            return 'Scissors';
            break;
    }
}

//must create a playerSelection function that accepts all forms of capitalization for their answer
//prompt user for input (R,P,S)
//attach this response to a variable within the function
//return a message correcting them if they do not put in some form of rock, paper, or scissors

function playerSelection() {
    userChoice = prompt('Please enter your choice');
    upperChoice = userChoice.toUpperCase();
}


