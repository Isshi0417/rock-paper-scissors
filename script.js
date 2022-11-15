const computerOption = ["rock", "paper", "scissors"];
const computerChoice = getComputerChoice();

function getComputerChoice() {
    return computerOption[Math.floor(Math.random() * computerOption.length)]
}


