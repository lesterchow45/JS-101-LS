function rotateRightMostDigits(num, count) {
  if (count === 1) {
    return num;
  }
  let numArr = num.toString().split("");
  let slice1 = numArr.slice(0, numArr.length - (count));
  let slice2 = numArr.slice(numArr.length - (count - 1));
  let finalArr = [];
  return Number(finalArr.concat(slice1, slice2, numArr[numArr.length - count]).join(""));
}

function maxRotation(num) {
  let iterate = String(num).length;
  for (let i = iterate; i >= 2; i--) {
    num = rotateRightMostDigits(num, i);
  }
  return num;
}

console.log(maxRotation(8703529146));