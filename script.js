// write getComputerChoice function that will return randomly one of three values (rock, paper, scissors).
function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    // select a random index to return a option from options array
    let RandomIndex = Math.floor(Math.random() * options.length);
    return options[RandomIndex];
}



// this function will run on-click event (one of three buttons). this function is the game.

let userScore = 0;
let computerScore = 0;

function playRound(event) {
    let userSelection = event.target.id;;
    let computerSelection = getComputerChoice();

    let result = document.querySelector('.result');
    let p = document.createElement('p');

    if( userSelection == computerSelection) {
        p.textContent = `Draw: you both select ${userSelection}`;
    } else if(userSelection == 'rock') {
        if(computerSelection == 'paper') {
            p.textContent = 'You Lose: Paper beats Rock!';
            p.classList.add('red');
            computerScore++;
        } else if(computerSelection == 'scissors') {
            p.textContent = 'You Win: Rock beats Scissors!';
            p.classList.add('green');
            userScore++;
        }
    } else if(userSelection == 'paper') {
        if(computerSelection == 'rock') {
            p.textContent = 'You Win: Paper beats Rock!';
            p.classList.add('green');
            userScore++;
        } else if(computerSelection == 'scissors') {
            p.textContent = 'You Lose: Scissors beats Paper!';
            p.classList.add('red');
            computerScore++;
        }
    } else if(userSelection == 'scissors') {
        if(computerSelection == 'rock') {
            p.textContent = 'You Lose: Rock beats Scissors!';
            p.classList.add('red');
            computerScore++;
        } else if(computerSelection == 'paper') {
            p.textContent = 'You Win: Scissors beats Paper!';
            p.classList.add('green');
            userScore++;
        }
    }

    result.appendChild(p);
    if (userScore == 3 || computerScore == 3) {
        let hr = document.createElement('hr');
        let hr1 = document.createElement('hr');
        let p1 = document.createElement('p');

        if(userScore == 3) {
            result.appendChild(hr);
            p1.textContent = 'YOU WON THE MATCH !!!';
            p1.classList.add('green');
            result.appendChild(p1);
            result.appendChild(hr1);
        }

        if(computerScore == 3) {
            result.appendChild(hr);
            p1.textContent = 'YOU LOSE THE MATCH !!!';
            p1.classList.add('red');
            result.appendChild(p1);
            result.appendChild(hr1);
        }

        userScore = 0;
        computerScore = 0;
    }
}



let buttons = document.querySelectorAll('button');
buttons.forEach(button => {button.addEventListener('click', playRound)});