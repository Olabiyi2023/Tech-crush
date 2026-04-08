// question 1: using the map method, create a new array where each number is double
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]    

// question 2: using the filter method, create a new array that only contains even numbers
const scores = [250, 300, 350, 400, 450];
const evenScores = scores.filter(score => score % 2 === 0);
console.log(evenScores); // Output: [250, 300, 350, 400, 450] 
// question 2: return scores greater than or equal to 300
const highScores = scores.filter(score => score >= 300);
console.log(highScores); // Output: [300, 350, 400, 450]
const mapped = scores.map(score => score >= 300);
console.log(mapped); // Output: [false, true, true, true, true]

// question 3: using the reduce method, calculate the total score
const totalScore = scores.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(totalScore); // Output: 1750

// question 4: add green to the end of the array 