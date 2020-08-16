const DIGITS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9
}

function stringToSignedInteger(str) {
  let arr = str.split("").map(value => DIGITS[value]);
  let num = 0;
  arr.forEach(digit => num = ((num * 10) + digit));
  return num;
}



console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("570") === 570); // logs true
console.log(stringToSignedInteger("100") === 100); // logs true