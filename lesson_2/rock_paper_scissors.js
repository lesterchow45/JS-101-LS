const readline = require('readline-sync');
const CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function rps(userInput, computerChoice) {
  if ((userInput === 'rock' && computerChoice === 'rock') ||
      (userInput === 'paper' && computerChoice === 'paper') ||
      (userInput === 'scissors' && computerChoice === 'scissors')) {
    prompt("It's a tie!");
  } else if ((userInput === 'rock' && computerChoice === 'scissors') ||
            (userInput === 'paper' && computerChoice === 'rock') ||
            (userInput === 'scissors' && computerChoice === 'paper')) {
    prompt("You win!");
  } else {
    prompt("Computer wins!");
  }
}

while (true) {
  prompt('Choose Rock, Paper, or Scissors');
  let userInput = readline.question();
  while (!CHOICES.includes(userInput.toLowerCase())) {
    prompt('Please select Rock, Paper, or Scissors');
    userInput = readline.question();
  }

  let computerChoice = CHOICES[Math.floor(Math.random() * (CHOICES.length))];
  console.log(computerChoice);

  rps(userInput, computerChoice);

  prompt('Play again? y/n');
  let playAgain = readline.question().toLowerCase();
  while (playAgain[0] !== 'n' && playAgain[0] !== 'y') {
    prompt('Please enter y/n');
    playAgain = readline.question().toLowerCase();
  }
  if (playAgain[0] !== 'y') {
    break;
  }
}
