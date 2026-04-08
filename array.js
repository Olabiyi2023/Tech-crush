let item1 = 'milk'
let item2 = 'bread'
let item3 = 'eggs'  
let items = ["milk", "bread", "eggs", 1, 2, 4, true]

console.log(items[0]);
console.log(items.length);

let fruits = ["apple", "banana", "orange", "grape", "kiwi"];
fruits.forEach(function(fruit) {
    console.log("i eat " + fruit);
})

let scores = [90, 90, 70, 60, 50]
let newScores = scores.map( score => score + 5);
console.log(newScores); // [95, 95, 75, 65, 55]
let students = ["Alice", "Bob", "Charlie", "David", "Eve"];
let nameTag = students.map( student => {
    return "Hello, " + student + "!";
});
console.log(nameTag); // ["Hello, Alice!", "Hello, Bob!", "Hello, Charlie!", "Hello, David!", "Hello, Eve!"]
nameTag = students.map( student => "Hello, " + student + "!");
console.log(nameTag); // ["Hello, Alice!", "Hello, Bob!", "Hello, Charlie!", "Hello, David!", "Hello, Eve!"]

//find
const studentsNames = ["Alice", "Bob", "Charlie", "David", "Eve", "Charlie"];
const found = studentsNames.find((name)=> {
    return name === "Charlie";
});
console.log(found); // "Charlie"

//reduce
let cartPrices = [1500, 800, 2200, 450, 1000]
let total = cartPrices.reduce(function(runningTotal, currentValue) {
    return runningTotal + currentValue;
}, 0);
console.log(total); // 5950
//Arrow function
let total2 = cartPrices.reduce((runningTotal, currentValue) => runningTotal + currentValue, 0);
console.log(total2); // 5950

// push, pop , shift, unshift
let colors = ["red", "green", "blue"];
colors.push("yellow");
let lastColor = colors.pop();
console.log(lastColor); // "yellow"
console.log(colors); // ["red", "green", "blue"]

let firstColor = colors.shift();
console.log(firstColor); // "red"
console.log(colors); // ["green", "blue"]

let newLength = colors.unshift("purple");
console.log(newLength); // 3
console.log(colors); // ["purple", "green", "blue"]



