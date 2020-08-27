function isRealPalindrome(str) {
  return (str.toLowerCase() === str.split("").reverse().join("").toLowerCase());
}

console.log(isRealPalindrome('Madam'));