let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

const VOWELS = 'aeiou';

Object.values(obj).forEach((arr => {
  arr.forEach(word => {
    word.split('').forEach(char => {
      if (VOWELS.includes(char)) {
        console.log(char);
      }
    });
  });
}));