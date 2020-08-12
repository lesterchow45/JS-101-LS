let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a, b) => {
  let oddA = a.filter(num => num % 2 === 1)
              .reduce((sum, next) => sum + next);
  let oddB = b.filter(num => num % 2 === 1)
              .reduce((sum, next) => sum + next);
  return oddA - oddB;
});

console.log(arr);