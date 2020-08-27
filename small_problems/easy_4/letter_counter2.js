function wordSizes(str) {
  let counter = {};
  let strArr = str.split(" ").map(word => word.match(/[a-z]/gi));
  for (let i = 0; strArr[i]; i++) {
    if (counter[strArr[i].length] === undefined) {
      counter[strArr[i].length] = 1;
    } else {
      counter[strArr[i].length] +=1;
    }
  }
  return counter;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}