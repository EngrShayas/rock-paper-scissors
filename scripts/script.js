console.log('Rock paper Scissors');

let playerScore = 0;
let computerScore = 0;
playRound();

function playRound() {
    let buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let playerSelection = button.value;
            let computerSelection = getComputerChoice();
            play(playerSelection, computerSelection);
        });
    });
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let choices = ['ROCK', 'PAPER', 'SCISSORS'];
    return choices[randomNumber - 1];
}

function play(playerSelection, computerSelection) {
    if (playerSelection == undefined) {
        console.log('CANCEL');
    }
    if (playerSelection == computerSelection) {
        console.log(`Player Selected ${playerSelection} - ${playerScore}`);
        console.log(`Computer Selected ${computerSelection} - ${computerScore}`);
        playerScore += 0;
        computerScore += 0;
        console.log(`It's a TIE`)
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        computerScore += 1;
        playerScore += 0;
        console.log(`Player Selected ${playerSelection} - ${playerScore}`);
        console.log(`Computer Selected ${computerSelection} - ${computerScore}`);
        console.log(`Computer WIN`);
    } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        computerScore += 0;
        playerScore += 1;
        console.log(`Player Selected ${playerSelection} - ${playerScore}`);
        console.log(`Computer Selected ${computerSelection} - ${computerScore}`);
        console.log(`Player WIN`);
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        computerScore += 0;
        playerScore += 1;
        console.log(`Player Selected ${playerSelection} - ${playerScore}`);
        console.log(`Computer Selected ${computerSelection} - ${computerScore}`);
        console.log(`Player WIN`);
    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        computerScore += 1;
        playerScore += 0;
        console.log(`Player Selected ${playerSelection} - ${playerScore}`);
        console.log(`Computer Selected ${computerSelection} - ${computerScore}`);
        console.log(`Computer WIN`);
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        computerScore += 1;
        playerScore += 0;
        console.log(`Player Selected ${playerSelection} - ${playerScore}`);
        console.log(`Computer Selected ${computerSelection} - ${computerScore}`);
        console.log(`Computer WIN`);
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        computerScore += 0;
        playerScore += 1;
        console.log(`Player Selected ${playerSelection} - ${playerScore}`);
        console.log(`Computer Selected ${computerSelection} - ${computerScore}`);
        console.log(`Player WIN`);
    }
}



// for (let i = 0; i < 5; i++) {
//     play();
// }
// if (playerScore > computerScore) {
//     console.log(`PLAYER IS THE WINNER`);
// } else if (playerScore < computerScore) {
//     console.log(`COMPUTER IS THE WINNER`);
// } else {
//     console.log(`GAME IS TIE`);
// }