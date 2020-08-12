let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

let obj = {}

arr.forEach(arr => {
  let key = arr[0];
  let value = arr[1];
  obj[key] = value;
});

console.log(obj);