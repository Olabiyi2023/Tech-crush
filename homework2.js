//SECTION A: forEach()
//Question 1
const numbers1 = [2, 4, 6, 8, 10];
numbers1.forEach(function(num) {
  console.log(num * 2);
});
//Question 2
const names = ["Esther", "John", "Ada", "Mike"];
names.forEach(function(name) {
  console.log("Hello " + name + "!");
});

//SECTION B: map()
//Question 3
const numbers2 = [1, 2, 3, 4, 5];
const squaredNumbers = numbers2.map(function(num) {
  return num * num;
});
console.log(squaredNumbers);
//Question 4
const prices = [100, 200, 300];
const discountedPrices = prices.map(price => price * 0.9);
console.log(discountedPrices);

//SECTIONC: filter()
//Question5
const numbers = [5, 12, 8, 20, 3];
const greaterThanTen = numbers.filter(num => num > 10);
console.log(greaterThanTen); // [12, 20]

//question6
const ages = [15, 22, 17, 30, 18];
const adults = ages.filter(function(age) {
  return age >= 18;
});
console.log(adults); // [22, 30, 18]

// Bonus Question
//Question 7
const numbers3 = [10, 15, 20, 25, 30];
const result = numbers3
  .filter(num => num > 20)  // [25, 30]
  .map(num => num * 2);     // [50, 60]

console.log(result); // [50, 60]