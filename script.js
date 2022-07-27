// result div
let resultDiv = document.getElementById('result');
// current score
let scoreDiv = document.getElementById('score');

// event listener for buttons
document.getElementById('rock').addEventListener('click', () => {
  playRound('Rock', getComputerChoice());
});
document.getElementById('paper').addEventListener('click', () => {
  playRound('Paper', getComputerChoice());
});
document.getElementById('scissors').addEventListener('click', () => {
  playRound('Scissors', getComputerChoice());
});

// function to get the choice of the computer based of a random number
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;

  if (randomNum === 1) {
    return 'Rock';
  } else if (randomNum === 2) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

// set points of both players to zero
let playerPoints = 0;
let computerPoints = 0;
scoreDiv.innerHTML = '0 - 0';

// current score of game
function currentScore() {
  scoreDiv.innerHTML = `${playerPoints} - ${computerPoints}`;
}

function playRound(playerSelection, computerSelection) {
  resultDiv.innerHTML = `${playerSelection} vs ${computerSelection}`;
  currentScore();

  if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    playerPoints++;
    currentScore();
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    playerPoints++;
    currentScore();
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    playerPoints++;
    currentScore();
  } else if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
    computerPoints++;
    currentScore();
  } else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
    computerPoints++;
    currentScore();
  } else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
    computerPoints++;
    currentScore();
  } else if (computerSelection === 'Rock' && playerSelection === 'Rock') {
  }

  winner();
}

// function to check who wins the game
function winner() {
  if (playerPoints >= 5) {
    resultDiv.innerHTML = 'Congrats, you win!!';
  } else if (computerPoints >= 5) {
    resultDiv.innerHTML = 'Try again, the computer wins';
  }
}
