let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let obj = {}

arr.map(letter => {
  for (item in letter) {
    obj[item] = letter[item] + 1;
  }
})

console.log(obj);