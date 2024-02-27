// create function getComputerChoice: randomly return Rock, Paper, or Scissors

//need it to pick one of three options, array?
//
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
