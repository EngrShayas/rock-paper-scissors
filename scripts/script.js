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
    if (playerScore == 5 || computerScore == 5) return;
    let resultP = '';
    let resultC = '';
    if (playerSelection == undefined) {
        console.log('CANCEL');
    }
    if (playerSelection == computerSelection) {
        playerScore += 0;
        computerScore += 0;
        resultP = '👔';
        resultC = '👔';
        displayScore(resultP, resultC, playerScore, computerScore, playerSelection, computerSelection);
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        computerScore += 1;
        playerScore += 0;
        resultP = '❌'
        resultC = '✔️'
        displayScore(resultP, resultC, playerScore, computerScore, playerSelection, computerSelection);
    } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        computerScore += 0;
        playerScore += 1;
        resultC = '❌'
        resultP = '✔️'
        displayScore(resultP, resultC, playerScore, computerScore, playerSelection, computerSelection);
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        computerScore += 0;
        playerScore += 1;
        resultC = '❌'
        resultP = '✔️'
        displayScore(resultP, resultC, playerScore, computerScore, playerSelection, computerSelection);
    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        computerScore += 1;
        playerScore += 0;
        resultP = '❌'
        resultC = '✔️'
        displayScore(resultP, resultC, playerScore, computerScore, playerSelection, computerSelection);
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        computerScore += 1;
        playerScore += 0;
        resultP = '❌'
        resultC = '✔️'
        displayScore(resultP, resultC, playerScore, computerScore, playerSelection, computerSelection);
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        computerScore += 0;
        playerScore += 1;
        resultC = '❌'
        resultP = '✔️'
        displayScore(resultP, resultC, playerScore, computerScore, playerSelection, computerSelection);
    }
    declareWinner();
}

function displayScore(resultP, resultC, playerScore, computerScore, playerSelection, computerSelection) {
    // Display for Player Score
    let divPlayer = document.querySelector('.player');
    let divPlayerScore = document.createElement('div');
    let paraPlayerResult = document.createElement('p');
    let paraPlayerScore = document.createElement('p');
    divPlayerScore.classList.add('score');
    paraPlayerResult.textContent = `${resultP} ${playerSelection}`;
    paraPlayerScore.textContent = `${playerScore}`;
    divPlayer.appendChild(divPlayerScore);
    divPlayerScore.appendChild(paraPlayerResult);
    divPlayerScore.appendChild(paraPlayerScore);
    // Display for Computer Score
    let divComputer = document.querySelector('.computer');
    let divComputerScore = document.createElement('div');
    let paraComputerResult = document.createElement('p');
    let paraComputerScore = document.createElement('p');
    divComputerScore.classList.add('score');
    paraComputerResult.textContent = `${resultC} ${computerSelection}`;
    paraComputerScore.textContent = `${computerScore}`;
    divComputer.appendChild(divComputerScore);
    divComputerScore.appendChild(paraComputerResult);
    divComputerScore.appendChild(paraComputerScore);
}

function declareWinner() {
    let heading = document.querySelector('h1');
    if (playerScore == 5) {
        heading.textContent = `Player is the Winner`;
        restart(heading);
        return;
    }
    else if (computerScore == 5) {
        heading.textContent = `Computer is the Winner`;
        restart(heading);
        return;
    }
    else if (playerScore == 5 && computerScore == 5) {
        heading.textContent = `IT's TIE`;
        restart(heading);
        return;
    }
}

function restart(heading) {
    let restartButton = document.createElement('button');
    restartButton.textContent = "RESTART";
    restartButton.classList.add('restartBtn');
    heading.appendChild(restartButton);
    restartButton.addEventListener('click', () => {
        location.reload();
    });
}