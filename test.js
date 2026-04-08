let str = "Coding is fun";
//extract the word coding
let coding = str.slice(0,6)
console.log(coding);
let fun =str.substring(10,13)
console.log(fun);
console.log(str.slice(7,9));


let colors = "red, green, blue";
let colorArray = colors.split(", ")
console.log(colorArray);

const joined = colorArray.join(" - ")
console.log(joined);

console.log('Abass Olabiyi Nathaniel'.split(' ').join("-"));

const url = "/api/v1/users";
const slash = url.split("/")
console.log(slash[2]);

const matricNumber = "TECHCRUSH-ESTHER-2026"
const splitMatric = matricNumber.split("-")
console.log(splitMatric[1]);

