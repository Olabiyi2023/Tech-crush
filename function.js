//without parameters
function greet() {
    console.log("Hello, world!");
}
greet();

function greetings(name) {
    console.log("see you again " + name );
}
greetings("John");

function add(a, b) {
    console.log(a);
    console.log(b);
    return a + b;
}
console.log(add(5, 3));

function isAdult(age) {
    return age >= 18;
}
console.log(isAdult(20));
console.log(isAdult(17));

//static function does not have parameters                                                      