let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let total = 0;
let munsterList = Object.values(munsters);

munsterList.forEach(munster => {
  if (munster['gender'] === 'male') {
    total += munster['age'];
  }
  return total;
});

console.log(total);
