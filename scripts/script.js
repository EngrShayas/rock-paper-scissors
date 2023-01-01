console.log('Rock paper Scissors');

function getRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

function getComputerChoice() {
    let randomNumber = getRandomNumber();
    if (randomNumber == 1) {
        return 'ROCK';
    } else if (randomNumber == 2) {
        return 'PAPER';
    } else if (randomNumber == 3) {
        return 'SCISSORS';
    } else {
        return undefined;
    }
}

function getPlayerChoice() {
    let playerSelection = prompt(`Enter 'ROCK | PAPER | SCISSORS'`, '');
    if (playerSelection == null || playerSelection == undefined) {
        return;
    }
    else if (playerSelection.toUpperCase() === 'ROCK' || playerSelection.toUpperCase() === 'PAPER' || playerSelection.toUpperCase() === 'SCISSORS') {
        return playerSelection.toUpperCase();
    }
    else {
        return getPlayerChoice();
    }
}

function play() {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    if (playerSelection == undefined) {
        console.log('CANCEL');
    }
    else if (playerSelection == computerSelection) {
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


let playerScore = 0;
let computerScore = 0;
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