// create variables
let customerName = "Nathaniel";
let customerAge = 27;
let bookTitle = "The Universe Of the Unknown";
let bookPrice = 3500;
let quantity = 7;
let isStudent = true;

console.log("customerName: " + customerName);
console.log("customerAge: " + customerAge);
console.log("bookTitle: " + bookTitle);
console.log("bookPrice: " + bookPrice);
console.log("quantity: " + quantity);
console.log("isStudent: " + isStudent);

//Use Arithmetic Operators
totalPrice = bookPrice * quantity;
console.log("totalPrice: " + totalPrice);

//Use comparison operators
let isAdult = customerAge >= 18;
let buyingManyBooks = quantity > 3;
let isBookFiveThousand = bookPrice === 5000;
console.log("isAdult: " + isAdult);
console.log("buyingManyBooks: " + buyingManyBooks);
console.log("isBookFiveThousand: " + isBookFiveThousand);

//Use primitive Data Type
const customerOrder = {
    customerName: customerName,
    customerAge: customerAge,
    bookTitle: bookTitle,
    bookPrice: bookPrice,
    quantity: quantity,
    isStudent: isStudent,
}
console.log(customerOrder);