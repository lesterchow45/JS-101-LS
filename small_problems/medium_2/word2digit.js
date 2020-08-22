/*
input: string with words and 'number words' which are zero - nine
output: same string with number words converted to number
rules: assume case sensitive
       if nonalphanumeric number, such as four. ignore 
example 1:
'five zero'
5 0

example 2:
'Five zero'
Five 0

create object with string as key and value as number
convert string into array
iterate over each element in array
if element is a property in the object
  element equals value of the property
convert array into new string
return new string
*/

const NUM_WORDS = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
};

function wordToDigit(sentence) {
  Object.keys(NUM_WORDS).forEach(word => {
    let regex = new RegExp(word, 'g');
    sentence = sentence.replace(regex, NUM_WORDS[word]);
  });

  return sentence;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));