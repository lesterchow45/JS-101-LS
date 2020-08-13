let readline = require('readline-sync');

function prompt(question) {
  console.log(question);
}

function sumIntegers(numbers) {
  let sumTotal = 0;
  for (let i = 1; i <= numbers; i++) {
    sumTotal += i;
  }
  console.log(sumTotal);
}

function sumProducts(number) {
  let productTotal = 1;
  for (let i = 1; i <= number; i++) {
    productTotal *= i;
  }
  console.log(productTotal);
}

prompt(`Please enter an integer greater than 0: `)
let userNumber = parseInt(readline.question());

prompt('Enter "s" to copute the sum, or "p" to compute the product. ');
let userFunction = readline.question();

if (userFunction === 's') {
  sumIntegers(userNumber);
} else {
  sumProducts(userNumber);
}