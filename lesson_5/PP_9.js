let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let newArr = arr.map(list => {
  if (typeof list[0] === 'string') {
    return list.slice().sort();
  } else {
    return list.slice().sort((a,b) => a - b);
  }
})

console.log(newArr);