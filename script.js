// Important constants and flexible variables
const computerOption = ["rock", "paper", "scissors"];
let playerChoice = '';
let computerChoice = '';
let playerScore = 0;
let computerScore = 0;

// Randomly choose from the rock paper scissors array
function getComputerChoice() {
    return computerOption[Math.floor(Math.random() * computerOption.length)]
}

// Player Scoreboard
const body = document.getElementById('bod');
const playerBoard = document.createElement('div');
body.appendChild(playerBoard);

// Scoreboard Label
const pLabel = document.createElement('h1');
pLabel.textContent = 'Player';
playerBoard.appendChild(pLabel);

// Score
const pScore = document.createElement('h1');
pScore.textContent = playerScore;
playerBoard.appendChild(pScore);

// Computer Scoreboard
const computerBoard = document.createElement('div');
body.appendChild(computerBoard);

// Scoreboard Label
const cLabel = document.createElement('h1');
cLabel.textContent = 'Computer';
computerBoard.appendChild(cLabel);

// Score
const cScore = document.createElement('h1');
cScore.textContent = computerScore;
computerBoard.appendChild(cScore);

// Play a round of rock paper scissors
function playRound(playerChoice, computerChoice) {

    // Random Computer Choice
    computerChoice = getComputerChoice();

    // When tied
    if (playerChoice == computerChoice) {
        // Announce "You tie!"
        console.log("You tie!");
    // When player chooses rock
    } else if (playerChoice == "rock") {
        // If computer chooses paper
        if (computerChoice == "paper") {
            // Add one point to the computer's score
            computerScore++;
            // Update scoreboard
            cScore.textContent = computerScore;
            // Announce "You lose! Paper beats rock"
            console.log("You lose! Paper beats rock");
        // Otherwise
        } else {
            // Add one point to the player's score
            playerScore++;
            // Update scoreboard
            pScore.textContent = playerScore;
            // Announce "You win! Rock beats scissors"
            console.log("You win! Rock beats scissors");
        }
    // When player chooses paper
    } else if (playerChoice == "paper") {
        // If computer chooses scissors
        if (computerChoice == "scissors") {
            // Add one point to the computer's score
            computerScore++;
            // Update scoreboard
            cScore.textContent = computerScore;
            // Announce result
            console.log("You lose! Scissors beats paper");
        // Otherwise
        } else {
            // Add one point to the player's score
            playerScore++;
            // Update scoreboard
            pScore.textContent = playerScore;
            // Announce result
            console.log("You win! Paper beats rock");
        }
    // When player chooses scissors
    } else if (playerChoice == "scissors") {
        // If computer chooses rock
        if (computerChoice == "rock") {
            // Add one point to the computer's score
            computerScore++;
            // Update scoreboard
            cScore.textContent = computerScore;
            // Announce result
            console.log("You lose! Rock beats scissors");
        // Otherwise
        } else {
            // Add one point to the player's score
            playerScore++;
            // Update scoreboard
            pScore.textContent = playerScore;
            // Announce result
            console.log("You win! Scissors beats paper");
        }
    }
    console.log(playerScore);
    console.log(computerScore);
}

// Plays a round of rock paper scissors
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



