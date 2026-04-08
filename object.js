obj = {
    name: "John",
    age: 30,
    city: "New York"    
}
let student = {
    name: "Alice",
    age: 25,
    department: "Computer Science",
    isEnrolled: true
}
console.log(student.name);
console.log(student["age"]);
console.log(obj);

let employee = {
    name: "Bob",
    position: "Software Engineer",
    salary: 80000,
    city: "San Francisco"
}
let newName = employee.name
let newPosition = employee.position

const { name, position, salary, city } = employee // destructuring the employee object to extract values into variables
console.log(name);
console.log(position);
console.log(salary);
console.log(city);

let courses = {
    CSC401 : "Data Structures",
    CSC402 : "Algorithms",
    CSC403 : "Operating Systems",
    CSC404 : "Database Systems" 
}
let {CSC401 : CSC400} = courses // renaming the key CSC401 to CSC400
console.log(CSC400); // Output: Data Structures

let person = {
    name: "Charlie",
    opay: true,
}
let {opay : palmpay} = person // renaming the key opay to palmpay
console.log(palmpay); // Output: true
console.log(person);

// let nombre = "David"
// let mi_llama = nombre
// console.log(mi_llama); // Output: David



let profile = {name: "Ada", age: 22};

//copy and add new properties
let updatedprofile = {
    ...profile,
    city: "London",
};
console.log(updatedprofile); // Output: { name: 'Ada', age: 22, city: 'London' }

const { nombre, ...rest}= {
    nombre: "Emeka",
    age: 28,
    city: "Lagos"
}
console.log(nombre); //"Emeka"
console.log(rest);

const user = {
    name : "Esther",
    password : "12345",
    isFemale : true,
    city : "Lagos",
    age : 25
}

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

// for in loop return keys in an object
for (let key in user) {
    console.log("these are the keys: " + key);
    console.log("these are the values: " + user[key]);
}






