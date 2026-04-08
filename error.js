// // syntax error
// let add = (5 + 3; // missing closing parenthesis

// // reference error
// console.log(x); // x is not defined 
// // type error

// let num = 5;
// num.toUpperCase(); // toUpperCase is not a function for numbers 

try{

    // Code that might fail goes here
    let result = 10 / 0;
    console.log(result);
    undefinedFunction(); // This will cause a reference error!
    console.log("This line will NOT run.");
} catch (error) {
    // This runs ONLY if something goes wrong
    console.log("An error occurred: " + error.name , error.message);
}

console.log("The program continues here.");

try {
    let age = 25
    console.log(age.length());   
} catch (error) {
    console.log("An error occured: " + error.message);      
}

function loadUserData(userId) {
    console.log("Starting to load data...");
    try {
        if (!userId.startsWith("BAD")) {
            throw new Error("User ID must start with BAD");
        }
        console.log("Data loaded for user: " + userId);
    } catch (error) {
        console.log("Failed: " + error.message);
    } finally {
        console.log("Loading complete. Closing connection."); // ALWAYS runs
    }
}

loadUserData("BAD-123455");   // Data loaded for user: 5  -->  Loading complete.
loadUserData("GOOD-123455");  // Failed: User ID must start with BAD --> Loading complete.



