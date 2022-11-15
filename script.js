const computerOption = ["rock", "paper", "scissors"];
const computerChoice = getComputerChoice();
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

console.log(computerChoice);
console.log(playerChoice);

if (playerChoice == computerChoice) {
    console.log("You draw!");
} else if (playerChoice == "rock") {
    if (computerChoice == "paper") {
        console.log("You lose! Paper beats rock"); 
    } else {
        console.log("You win! Rock beats scissors");
    }
} 