function multiSum(num) {
  let total = 0;
  for (let i = 1; i < num; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }
  total += num;
  return total;
}

console.log(multiSum(1000));