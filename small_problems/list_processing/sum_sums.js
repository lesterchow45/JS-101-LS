function sumOfSums(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[arr.length - (i + 1)] * (i + 1);
  }
  return total;
}

console.log(sumOfSums([1, 5, 7, 3]));