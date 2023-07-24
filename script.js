// write getComputerChoice function that will return randomly one of three values (rock, paper, scissors).
function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    // select a random index to return a option from options array
    let RandomIndex = Math.floor(Math.random() * options.length);
    return options[RandomIndex];
}

// write getUserChoice function player selection that will get input from user through console & returns the string in lower-case to make it case-insensitive.
function getUserChoice() {
    let input;
    while (input != 'rock' || input != 'paper' || input != 'scissors') {
        input = prompt('Please enter "rock", "paper", or "scissors"').toLowerCase();
    }
    return input;
}

// write playRound function to play a single round of game. the function will take two parameters playerSelection & computerSelection. 
// returns a array with two values.
// first value should be a string that declares the winner of the round like so: "You Lose! Paper beats Rock".
// second value should be a number 1, 2 or 3. if user won than 1, if the computer won than 2 or if match is a draw than 3.
function playRound() {
    let userSelection = getUserChoice();
    let computerSelection = getComputerChoice();

    if( userSelection == computerSelection) {
        return [`Draw: you both select ${userSelection}`, 3];
    } else if(userSelection == 'rock') {
        if(computerSelection == 'paper') {
            return ['You Lose: Paper beats Rock!', 2];
        } else if(computerSelection == 'scissors') {
            return ['You Win: Rock beats Scissors!', 1];
        }
    } else if(userSelection == 'paper') {
        if(computerSelection == 'rock') {
            return ['You Win: Paper beats Rock!', 1];
        } else if(computerSelection == 'scissors') {
            return ['You Lose: Scissors beats Paper!', 2];
        }
    } else if(userSelection == 'scissors') {
        if(computerSelection == 'rock') {
            return ['You Lose: Rock beats Scissors!', 2];
        } else if(computerSelection == 'paper') {
            return ['You Win: Scissors beats Paper!', 1];
        }
    }
}

// write game function that will use playRound function to play a 5 round game that prints the winner or looser of each round
// and keeps score and reports a winner or loser of the game at the end. 
function game() {
    let userScore = 0;
    let computerScore = 0;

    for(let i = 1; i <= 5; i++){
        console.log(`Round ${i}`);
        let result = playRound();
        console.log(result[0]);

        if(result[1] == 1) {
            userScore++;
        }else if(result[1] == 2){
            computerScore++;
        }
    }

    if(userScore == computerScore) {
        console('Match Draw !!')
    } else if(userScore > computerScore) {
        console.log('You Won !!');
    } else {
        console.log('You Lose !!');
    }
}


// function call to initiate the game
game();