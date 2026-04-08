//if else statements
let userAge = 21;
if (userAge >=18) {
    console.log("Welcome to club 9ja")
} else {
    console.log("sorry, you are not allowed to enter")
}
let gender = "non-binary";
if (gender === "female") {
    console.log("Welcome to the ladies' section")
} else if(gender === "male") {
    console.log("Welcome to the men's section")
}else if(gender === "other"){
    console.log("Welcome to the other section");
    
}else {
    console.log("We dont know where u belong");
    
}
let username = "Nath"
let password = "password1234"
if (username === "Nath" && password === "password1234") {
    console.log("login successful");
    
}else if (username === "Nath" || password === "password1234"){
    console.log("username or password is correct");
    
}else {
    console.log("login failed");
    
}
let age = 20;

if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}