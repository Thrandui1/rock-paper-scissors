const ROCK = 'rock';
const SCISSORS = 'sciccors';
const PAPPER = 'papper';
const imgs = document.querySelectorAll(".bottom-container img");
const computerSelection = getComputerChoice();


let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const random = (min = 1, max = 4) => {
        return Math.floor(Math.random() * (max - min) + min);
    }
    if (random() === 1) return ROCK;
    else if (random() === 2) return SCISSORS;
    else return PAPPER;

}

function playRound(humanChoice, computerChoice) {
    
    let result;

    if (humanChoice === 'rock' && computerChoice === 'rock') {
        return result = "It's a draw";
    } else if (humanChoice === 'rock' && computerChoice === 'sciccors') {
        result++;
        return result = "This is a victory";
    } else if (humanChoice === 'rock' && computerChoice === 'papper') {
        computerChoice++;
        return result = "You've lost";

    } if (humanChoice === 'sciccors' && computerChoice === 'rock') {
        computerChoice++;
        return result = "You've lost";
    } else if (humanChoice === 'sciccors' && computerChoice === 'sciccors') {
        return result = "It's a draw";
    } else if (humanChoice === 'sciccors' && computerChoice === 'papper') {
        humanChoice++;
        return result = "This is a victory";

    } if (humanChoice === 'papper' && computerChoice === 'rock') {
        humanChoice++;
        return result = "This is a victory";
    } else if (humanChoice === 'papper' && computerChoice === 'sciccors') {
        computerChoice++;
        return result = "You've lost";
    } else if (humanChoice === 'papper' && computerChoice === 'papper') {
        return result = "It's a draw";
    }

}




