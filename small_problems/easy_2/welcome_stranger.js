function greetings(arr, obj) {
  let name = arr.join(" ");
  let titles = Object.values(obj).join(" ");
  console.log(`Hello, ${name}! Nice to have a ${titles} around`);
}

greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
