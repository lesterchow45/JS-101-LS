/*
input: number
output:  fib number
rules: 
sum of last two numbers is the next number
do this recursively

example 1:
num = 7
1 1 2 3 5 8 13
return = 5

num 4 = num 3 + num 2 (num 1 + num 0)
num 5 = num 4 (num 3 + num 2) (num 1 + num 0) + num 3 (num 2 + num 1)

*/

function fibonacci(num) {
  if (num <= 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765