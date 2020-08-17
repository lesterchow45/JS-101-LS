function sum(num) {
  return num.toString()
        .split("")
        .reduce((total, value) => parseInt(total) + parseInt(value), 0);
}

console.log(sum(123456789));