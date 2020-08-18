function rotateRightmostDigits(num, count) {
  if (count === 1) {
    return num;
  }
  let numArr = num.toString().split("");
  let slice1 = numArr.slice(0, numArr.length - (count));
  let slice2 = numArr.slice(numArr.length - (count - 1));
  let finalArr = [];
  return finalArr.concat(slice1, slice2, numArr[numArr.length - count]).join("");
}

console.log(rotateRightmostDigits(735291, 2)); 