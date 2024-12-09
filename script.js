const imgs = document.querySelectorAll(".bottom-container img");
const computerSelection = getComputerChoice();


let humanScore = 0;
let computerScore = 0;

if (humanScore === 5 || computerScore === 5) {
    humanScore = 0;
    computerScore = 0;
    document.querySelector(".you-score").textContent = `${humanScore}`;
    document.querySelector(".computer-score").textContent = `${computerScore}`;
};


function getComputerChoice() {
    const random = (min = 1, max = 4) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    if (random() === 1) return 'rock';
    else if (random() === 2) return 'scissors';
    else return 'papper';
};


imgs.forEach(img => img.addEventListener('click', () => {

    const compChoice = getComputerChoice();
    const roundResult = playRound(img.id, compChoice);
    document.querySelector(".central-container").textContent = `${roundResult}`;

    const compImg = document.querySelector("#comp-choice-img");
    compImg.setAttribute("src", `images/${compChoice}.png`);

    document.querySelector(".you-score").textContent = `${humanScore}`;
    document.querySelector(".computer-score").textContent = `${computerScore}`;

    if (humanScore === 5 || computerScore === 5){
        const popUp = document.querySelector(".result-alert-container");
        popUp.classList.add("result-alert-container-visible");
        
        const resultSign = document.querySelector(".result-sign");
        resultSign.classList.add("result-sign-anim");

        const paraRes = document.querySelector(".p-result");
        const replayBtn = document.querySelector(".btn-play");

        if (humanScore === 5){
            paraRes.textContent = "You have beaten the computer!";
        } else {
            paraRes.textContent = "You have been beaten by the computer!";
        }

        replayBtn.addEventListener("click", () => {
        humanScore = 0;
        computerScore = 0;
        document.querySelector(".you-score").textContent = `${humanScore}`;
        document.querySelector(".computer-score").textContent = `${computerScore}`;
        popUp.classList.remove("result-alert-container-visible");
        resultSign.classList.remove("result-sign-anim");
        document.querySelector(".central-container").textContent = "Choose yor object!";
        compImg.setAttribute("src", ``)

        });

    }

}));


function playRound(humanChoice, computerSelection) {

    let result;

    if (humanChoice === 'rock' && computerSelection === 'rock') {
        return result = "It's a draw";
    } else if (humanChoice === 'rock' && computerSelection === 'scissors') {
        humanScore++;
        return result = "This is a victory";
    } else if (humanChoice === 'rock' && computerSelection === 'papper') {
        computerScore++;
        return result = "You've lost";

    } if (humanChoice === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        return result = "You've lost";
    } else if (humanChoice === 'scissors' && computerSelection === 'scissors') {
        return result = "It's a draw";
    } else if (humanChoice === 'scissors' && computerSelection === 'papper') {
        humanScore++;
        return result = "This is a victory";

    } if (humanChoice === 'papper' && computerSelection === 'rock') {
        humanScore++;
        return result = "This is a victory";
    } else if (humanChoice === 'papper' && computerSelection === 'scissors') {
        computerScore++;
        return result = "You've lost";
    } else if (humanChoice === 'papper' && computerSelection === 'papper') {
        return result = "It's a draw";
    }

};




