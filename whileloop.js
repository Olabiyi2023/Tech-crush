let tries = 0
while(tries < 3) {
    console.log( tries + 1 )
    tries++
}
let count = 10
while (count > 0) {
    console.log(count)
    count--
}
console.log("done!");
let day = "Saturday";
switch (day) {
    case "Monday":   console.log("New week, fresh start!");   break;
    case "Friday":   console.log("Almost the weekend!");   break;
    case "Saturday":
    case "Sunday":   console.log("It is the weekend! Rest up.");   break;
    default:   console.log("Keep going, midweek grind!");
}
for (let i = 1; i <= 5; i++) {
    console.log("Count: " + i);
}   // Output: Count: 1, Count: 2, Count: 3, Count: 4, Count: 5
