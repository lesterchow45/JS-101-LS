let readline = require('readline-sync');

let length = readline.question('Enter the length of the room in meters:\n');

let width = readline.question('Enter the width of the room in meters:\n');

let area = (length * width).toFixed(2);
let sqFt = (area * 10.7637).toFixed(2);

console.log(`The area of the room is ${area} square meters (${sqFt} square feet)`);

