// function to get the choice of the computer based of a random number
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;

  if (randomNum === 1) {
    // console.log('Rock');
    return 'Rock';
  } else if (randomNum === 2) {
    // console.log('Paper');
    return 'Paper';
  } else {
    // console.log('Scissors');
    return 'Scissors';
  }
}

let playerPoints = 0;
let computerPoints = 0;

// function to check who wins the round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    playerPoints++;
    return 'You Win! Rock beats Scissors';
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    playerPoints++;
    return 'You Win! Paper beats Rock';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    playerPoints++;
    return 'You Win! Scissors beats Paper';
  } else if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
    computerPoints++;
    return 'You Lose! Rock beats Scissors';
  } else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
    computerPoints++;
    return 'You Lose! Paper beats Rock';
  } else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
    computerPoints++;
    return 'You Lose! Scissors beats Paper';
  } else if (computerSelection === 'Rock' && playerSelection === 'Rock') {
    return 'Tie Game! Try Again';
  }
}

let promptInput = prompt('Rock, Paper or Scissors');
let playerInput = promptInput.charAt(0).toUpperCase() + promptInput.slice(1);
console.log(playerInput);

// function to play 5 rounds and check who wins the game
function game() {
  for (let i = 0; i < 5; i++) {
    // choice of player
    const playerSelection = playerInput;
    console.log(`Player: ${playerSelection}`);

    // choice of computer
    const computerSelection = getComputerChoice();
    console.log(`Computer: ${computerSelection}`);

    // functi0n to check which player wins the round
    console.log(playRound(playerSelection, computerSelection));

    // which player wins the game
    if (i >= 4) {
      if (playerPoints > computerPoints) {
        console.log(`The player wins with ${playerPoints} - ${computerPoints}`);
      } else if (computerPoints > playerPoints) {
        console.log(
          `The computer wins with ${computerPoints} - ${playerPoints}`
        );
      } else if (playerPoints === computerPoints) {
        console.log(`Tie game, try again ${playerPoints} - ${computerPoints}`);
      } else {
        console.log('Something went wrong, try again');
      }
    }
  }
}

game();
