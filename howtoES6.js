// CONST & LET
let name = "Chris";

name = "Jack";

console.log(name); // const will always overide so result is Chris

const person = {
  name: "Chris",
  age: 33
};

person.name = "Jack"; // how to pull something out of a string

const nums = [1, 2, 3, 4];
nums.push(5); // how to add a number into an array that uses const

console.log(nums);

// ARROW FUNCTIONS

// function sayHello() {
//   console.log("Hello");
// }

const sayHello = name => console.log(`Hello  ${name}`); // Use ` to allow inputs of variables put in {}

// No {} for the output as only one variable
// No () around name (before arrow function) as extension used

const fruits = ["Apples", "Oranges", "Grapes"];

//FOREACH
fruits.forEach((fruit, index) => console.log(fruit)); // Lists all variables in the array

// MAP

const singleFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase()); // .slice removes variables in mapped location & .toUpperCase() makes the output in all caps

//console.log(singleFruit);

// FILTER
const people = [
  { id: 1, name: "Karen" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Sharon" }
];

const people2 = people.filter(person => person.id != 2); // Creates a new array filtering out one variable
console.log(people2);

//SPREAD

const arr = [1, 2, 3];
const arr2 = [...arr, 4]; // spread operator is [...constant,x] which adds x to the array as a NEW array -- w/o the spread operator it outputs an array inside the defined array
const arr3 = [...arr.filter(num => num !== 2)];

console.log(arr3); // arr3 is now a spread operation from arr with 2 filtered out but a new constant

const person1 = {
  name: "Bryan",
  age: 36
};

const person2 = {
  // defines new const
  ...person, // spread operator then original const
  email: "bryan@gmail.com" // new information to be added
};

console.log(person2); // new const adding more data to person1 with the new data added from spread operator adds e-mail

// DESTRUCTURING

const profile = {
  names: "John Doe",
  lives: {
    street: "40 main st",
    city: "workington"
  },
  hobbies: ["movies", "music"]
};

const { names, lives, hobbies } = profile;
const { street, city } = profile.lives; // Pulls out a variable in the const array for use as a direct const instead of profile.lives.city it is now city & profile.lives.street is now street

console.log(street); // Street has been pulled successfully from profile.lives in the profile array

// CLASSES

class Personx {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // this constructor allows you to have properties inside the array that can be defined later instead of the same const
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age}`; // Method adding properties into an output in ``
  }
}

const persony = new Personx("James", 31);
const personz = new Personx("Sara", 25);

console.log(persony.greet()); // outputs const persony applying the greet method

// SUBCLASSES
class Customer extends Personx {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }

  info() {
    return `${this.name} owes £${this.balance}.00`;
  }
}

const customer1 = new Customer("Tim", 32, 250);

console.log(customer1.info());

// MODULES

//file 1 (file1.js) // Imaginary file in C:/Files/File1.js
export const name = "Jane"; // Exports the const making it available for other files
export const numbs = [1, 2, 3];
export default Personx;

// file 2 (file2.js) // Imaginary file in C:/Files/File2.js
import { name } from "./file1"; // Importing the name constant from C:/Files/file1.js
import Personx from "./file1"; // {} not required as exported as default

console.log(name); // this would log the name const imported from file 1 if successful
