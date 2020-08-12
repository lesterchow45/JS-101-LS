let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

let munsterList = Object.entries(munsters);

munsterList.forEach((munster) => {
  let name = munster[0];
  let age = munster[1]['age'];
  let gender = munster[1]['gender'];

  console.log(`${name} is a ${age}-year-old ${gender}`);
});

