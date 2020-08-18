function multiplyAllPairs(arr1, arr2) {
  let multiplyArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      multiplyArr.push(arr1[i] * arr2[j]);
    }
  }
  return multiplyArr.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); 