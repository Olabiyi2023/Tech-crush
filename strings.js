// lenght
let stringText = "This is a class on string methode"
console.log(stringText.length);
let arr = ["stringText", "hon"]
console.log(arr.length);

let capitalLetter = stringText.toUpperCase()
console.log(capitalLetter);
let smallLetter = stringText.toLowerCase()
console.log(smallLetter);

let str = "    Hello, World   "
let Trimmedstr = str.trim()
let frontTrimmedstr = str.trimEnd()
let endTrimmedStr = str.trimStart()
console.log(Trimmedstr);
console.log(endTrimmedStr);
console.log(frontTrimmedstr);

let signupName = " Esther"
let signinName = "Esther"
if (signupName.trim() === signinName){
    console.log("Welcome back, Esther")
}
else {
    console.log("invalid login information");
    
}
 
//indexOf and includes
let user_email = "abassolabiyi3@gmail.com"
let email_index = user_email.indexOf("345")
console.log("email_index: " + email_index);
let email_contains_at = user_email.includes("@")
console.log(email_contains_at);

let userName = "techCrush Esther 6"
let starts = userName.startsWith("techCrush")
console.log(starts);

let ends = userName.endsWith("6")
console.log(ends);

//slice and substring
let testString = "my name is Esther"
let slicedString = testString.slice(-5)
let substringString = testString.substring(-2)
console.log(slicedString);
console.log(substringString);

//replace and replaceAll
const text = "Esther is a techie, Esther loves codiing and Esther loves teaching"
let replacedText = text.replace("Esther", "She")
let replacedAllText = text.replaceAll("Esther", "She")
console.log(replacedText);
console.log(replacedAllText);

const msg = "   Hello, WORLD!  ";
let trimmedMsg = msg.trim()
console.log(trimmedMsg)

let msgstartswithHello = trimmedMsg.startsWith("Hello")
console.log(msgstartswithHello)

let msgendswithWorld = trimmedMsg.endsWith("WORLD!")
console.log(msgendswithWorld)

let msgLowerCase = msg.toLowerCase()
console.log(msgLowerCase)
let postionWorld = msg.indexOf("WORLD!")
console.log(postionWorld)

let replacedMsg = msg.replace("WORLD", "Nigeria")
console.log(replacedMsg)

let replaceAllLwith1 = msg.replaceAll("l", "1")
console.log(replaceAllLwith1)

let getCharAtPosition = msg.slice(3,8)
console.log(getCharAtPosition)


//split
const sentence = "LANGUAGES: Javascript, Python, Java, C++"
let splitSentence = sentence.split(",")
console.log(splitSentence);

let example = "she is a girl , she is a teacher, she is eating"
console.log(example.split("she"));