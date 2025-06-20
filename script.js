let humanScore = 0;
let computerScore = 0;
let computerChoice;
let humanChoice;


function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber <= 0.33) {
        computerChoice = 'rock';
    } else if (randomNumber >= 0.34 && randomNumber <= 0.66) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    console.log('Computer has selected: ' + computerChoice)
}

//Assume user will always input a valid choice to save time.
function getHumanChoice() {
    humanChoice = prompt('Please choose: Rock, Paper, Scissors').toLowerCase();
    console.log('Player has selected: ' + humanChoice)
}

function tellScore() {
        console.log("User score: " + humanScore)
        console.log("Computer score: " + computerScore)
}

function playRound(computerChoice, humanChoice) {
    let humanWins;

    if (computerChoice == humanChoice) {
        console.log("It's a tie! " + computerChoice + " is equal to " + humanChoice)
        tellScore();
        return;
    }

    if (humanChoice == 'rock') {
        if (computerChoice == 'scissors') {
            humanWins = true;
        } else {
            humanWins = false;
        }

    } else if (humanChoice == 'paper') {
        if (computerChoice == 'rock') {
            humanWins = true;
        } else {
            humanWins = false;
        }

    } else if (humanChoice == 'scissors') {
        if (computerChoice == 'paper') {
            humanWins = true;
        } else {
            humanWins = false;
        }

    }

    if (humanWins) {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
        tellScore();
    } else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
        tellScore();
    }
}

function playGame() {
    for (let i = 1; i < 6; i++) {
        console.log("Game " + i + " of 5");
        getHumanChoice();
        getComputerChoice();
        playRound(computerChoice, humanChoice);
    }
    console.log('That was five games. Thank you for playing! Refresh the page to restart.');
}

playGame();

//game logic

//new function playGame that calls playRound five times
//play to 5 rounds (index somewhere out of playRound that counts up to 5)
//if you assign playRound to a variable, it will return the value of the function end

//Refactor after implmenting for bonus points
//DO NOT GO OVERBOARD. Save the effort for portfolio