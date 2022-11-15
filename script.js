const computerOption = ["rock", "paper", "scissors"];
const playerChoice = "rock";

function getComputerChoice() {
    return computerOption[Math.floor(Math.random() * computerOption.length)]
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return "You draw!";
    } else if (playerChoice == "rock") {
        if (computerChoice == "paper") {
            return "You lose! Paper beats rock";
        } else {
            return "You win! Rock beats scissors";
        }
    } else if (playerChoice == "paper") {
        if (computerChoice == "scissors") {
            return "You lose! Scissors beats rock";
        } else {
            return "You win! Paper beats rock";
        }
    } else if (playerChoice == "scissors") {
        if (computerChoice == "rock") {
            return "You lose! Rock beats scissors";
        } else {
            return "You win! Scissors beats paper";
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerChoice, computerChoice));
    }
}

for (let i = 0; i < 5; i++) {
    computerChoice = getComputerChoice();
    console.log(computerChoice);
    console.log(playRound(playerChoice, computerChoice));
}
