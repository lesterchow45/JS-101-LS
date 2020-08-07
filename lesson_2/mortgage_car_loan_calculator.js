// let m = p * (j / (1 - Math.pow((1 + j), (-n))));

/*
  GET:
    3 user inputs, loan amount, apr, loan duration
  RULES:
    loan amount should be >= 0, should be a number
    apr should be >= 0, should be a percentage
    loan duration should be >=0, should be in months
  CALCULATE:
    monthly interest rate, loan duration
  OUTPUT:
    monthly payment calculated by the formula
*/

function askAgain(userInput) {
  return userInput.trim() === '' ||
         isNaN(userInput)        ||
         userInput < 0;
}

function prompt(input) {
  console.log(`=> ${input}`);
}

while (true) {
  const readline = require('readline-sync');

  prompt('What is the loan amount?');
  let loanAmount = readline.question();
  while (askAgain(loanAmount)) {
    prompt('That is not a number or is < 0');
    loanAmount = readline.question();
  }

  prompt('What is the apr? Enter a number ie. 5.3 = 5.3%');
  let apr = readline.question();
  while (askAgain(apr)) {
    prompt('That is not a number or is < 0');
    apr = readline.question();
  }
  apr = parseFloat(apr) / 100;

  prompt('What is the loan duration in months?');
  let loanDuration = readline.question();
  while (askAgain(loanDuration)) {
    prompt('That is not a number or is < 0');
    loanDuration = readline.question();
  }

  let monthlyInterest = apr / 12;

  let monthlyPayment = loanAmount * (monthlyInterest /
                        (1 - Math.pow((1 + monthlyInterest), (-loanDuration))));

 prompt(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);

  prompt('Would you like to rerun the program? y/n?');
  let rerun = readline.question();
  while (rerun !== 'y' && rerun !== 'n') {
    prompt('Please enter y or n');
    rerun = readline.question();
  }
  if (rerun === 'n') {
    break;
  }
}