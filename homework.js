// 3. Mix
const email = "user@example.com";

// Get username
const username = email.split("@")[0];

// Check if .com domain
const isCom = email.endsWith(".com");

// Replace @ with AT
const newEmail = email.replace("@", "AT");

console.log(username); // user
console.log(isCom);    // true
console.log(newEmail); // userATexample.com

const names = "John,Jane,Doe";

// Split into array
const namesArray = names.split(",");

// Join with space
const joinedNames = namesArray.join(" ");

console.log(namesArray);   // ["John", "Jane", "Doe"]
console.log(joinedNames);  // John Jane Doe


const path = "/user/home/docs";

// Split by "/"
const pathArray = path.split("/");

// Get "home"
const home = pathArray[2];

console.log(pathArray); // ["", "user", "home", "docs"]
console.log(home);      // home
const str = "Nigeria is awesome";

// Extract "Nigeria" using substring()
const country = str.substring(0, 7);

// Extract "awesome" using slice()
const awesome = str.slice(-7);

// Get "is" using slice()
const isWord = str.slice(8, 10);

console.log(country);   // Nigeria
console.log(awesome);   // awesome
console.log(isWord);    // is