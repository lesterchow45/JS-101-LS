let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let capitalize = word => word[0].toUpperCase() + word.slice(1);

let arr = Object.values(obj).map(grocery => {
  if (grocery['type'] === 'fruit') {
    return grocery['colors'].map(char => capitalize(char));
  } else {
    return grocery['size'].toUpperCase();
  }
});

console.log(arr);