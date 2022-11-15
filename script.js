const computerOption = ["rock", "paper", "scissors"];
const playerChoice = "rock";
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return computerOption[Math.floor(Math.random() * computerOption.length)]
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return "You draw!";
    } else if (playerChoice == "rock") {
        if (computerChoice == "paper") {
            computerScore++;
            return "You lose! Paper beats rock";
        } else {
            playerScore++;
            return "You win! Rock beats scissors";
        }
    } else if (playerChoice == "paper") {
        if (computerChoice == "scissors") {
            computerScore++;
            return "You lose! Scissors beats rock";
        } else {
            playerScore++;
            return "You win! Paper beats rock";
        }
    } else if (playerChoice == "scissors") {
        if (computerChoice == "rock") {
            computerScore++;
            return "You lose! Rock beats scissors";
        } else {
            playerScore++;
            return "You win! Scissors beats paper";
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
    }
    console.log(playerScore);
    console.log(computerScore);
}

game();