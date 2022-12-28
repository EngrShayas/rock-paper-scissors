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

console.log(getComputerChoice());