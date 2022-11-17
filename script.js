const computerOption = ["rock", "paper", "scissors"];
let playerChoice = '';
let computerChoice = '';
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return computerOption[Math.floor(Math.random() * computerOption.length)]
}

// Player Scoreboard
const body = document.getElementById('bod');
const playerBoard = document.createElement('div');
const pScore = document.createElement('h1');
pScore.textContent = playerScore;
body.appendChild(playerBoard);
playerBoard.appendChild(pScore);

// Play a round of rock paper scissors
function playRound(playerChoice, computerChoice) {

    // Update Player Score
    pScore.textContent = playerScore;
    playerBoard.appendChild(pScore);

    // Random Computer Choice
    computerChoice = getComputerChoice();
    if (playerChoice == computerChoice) {
        console.log("You tie!");
    } else if (playerChoice == "rock") {
        if (computerChoice == "paper") {
            computerScore;
            console.log("You lose! Paper beats rock");
        } else {
            playerScore++;
            console.log("You win! Rock beats scissors");
        }
    } else if (playerChoice == "paper") {
        if (computerChoice == "scissors") {
            computerScore++;
            console.log("You lose! Scissors beats paper");
        } else {
            playerScore++;
            console.log("You win! Paper beats rock");
        }
    } else if (playerChoice == "scissors") {
        if (computerChoice == "rock") {
            computerScore++;
            console.log("You lose! Rock beats scissors");
        } else {
            playerScore++;
            console.log("You win! Scissors beats paper");
        }
    }
    console.log(playerScore);
}

function game() {
    let computerChoice = getComputerChoice();
    console.log(playRound(playerChoice, computerChoice));
    if (playerScore == computerScore) {
        console.log("Tie!");
    } else if (playerScore > computerScore) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
    console.log(playerScore);
    console.log(computerScore);
}

// Choosing Rock
const rock = document.getElementById('rock');
rock.addEventListener('click', rockRound); // Add an event when rock button is clicked

function rockRound() {
    playerChoice = 'rock';
    playRound(playerChoice, computerChoice);
}

// Choosing Paper
const paper = document.getElementById('paper');
paper.addEventListener('click', paperRound); 

function paperRound() {
    playerChoice = 'paper';
    playRound(playerChoice, computerChoice);
}

// Choosing Scissors
const scissors = document.getElementById('scissors');
scissors.addEventListener('click', scissorsRound);

function scissorsRound() {
    playerChoice = 'scissors';
    playRound(playerChoice, computerChoice);
}



