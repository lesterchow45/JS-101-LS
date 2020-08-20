let readline = require('readline-sync');

console.log('What is your age?');
let age = readline.question();
console.log('At what age would you like to retire?');
let retire = readline.question();

let yearsLeft = retire - age;
let today = new Date();
let currentYear = today.getFullYear();
let retireYear = currentYear + yearsLeft;

console.log(`It's ${currentYear}. You will retire in ${retireYear}.`);
console.log(`You have only ${yearsLeft} years of work to go!`);

