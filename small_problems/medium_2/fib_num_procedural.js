function fibonacci(num) {
  let fibArr = [1, 1];
  for (let i = 3; i <= num; i++) {
    fibArr.push(fibArr[i-2] + fibArr[i-3]);
  }
  return fibArr[num-1];
}

console.log(fibonacci(2));
