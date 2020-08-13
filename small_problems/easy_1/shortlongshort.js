function shortLongShort(a, b) {
  let word = '';
  if (b.length > a.length) {
    word = a + b + a;
  } else {
    word = b + a + b;
  }
  return word;
}

console.log(shortLongShort('hiawefawef', 'hello'));