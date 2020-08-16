function crunch (str) {
  let arr = str.split("");
  let newStr = [arr[0]];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] !== arr[i]) {
      newStr.push(arr[i + 1]);
    }
  }
  return newStr.join("");
}

console.log(crunch('ggsaww333g'));