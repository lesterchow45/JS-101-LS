/*
input: string
output: true or false
rules: spelling blocks 2 letters per block
words can only be spelled with the blocks
  cannot use both letters
  can only use each block once
  letters can be case-insensitive

questions:
  empty value?
  do we ignore spaces, punctuations, etc?

DSA:
  array for the blocks

pseudo:
  initialize block into an array uppercase
  take string as uppercase
  for each letter in string, if array includes letter
    l
*/



function isBlockWord(str) {
  let arr = [1, 2, 3];
  let arr2 = arr;
  arr.push([1,2]);
  console.log(arr);
  console.log(arr2);
}

isBlockWord('y');

// console.log(isBlockWord('BATCH'));      // true
// console.log(isBlockWord('BUTCH'));      // false
// console.log(isBlockWord('jest'));       // true