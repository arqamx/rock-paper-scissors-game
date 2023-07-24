// write getComputerChoice function that will return randomly one of three values (rock, paper, scissors).
function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    // select a random index to return a option from options array
    let RandomIndex = Math.floor(Math.random() * options.length);
    return options[RandomIndex];
}

// write userSelection function player selection that will get input from user through console & returns the string in lower-case to make it case-insensitive.

// write playRound function to play a single round of game. the function will take two parameters playerSelection & computerSelection. returns a strings
// that declares the winner of the round like so: "You Lose! Paper beats Rock"

// write game function that will use playRound function to play a 5 round game that prints the winner or looser of each round
// and keeps score and reports a winner or loser of the game at the end. 