// Primitive (7 types)

// String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false    // boolearn
const outsideTemp = null    // object
let userEmail;              // undefined

const id = Symbol('123')        // symbol
const anotherId = Symbol('123') // symbol

// console.log(id === anotherId);     // false   


// Reference (Non primitive)

// Array, Objects, Functions    

const heros = ["shaktiman", "naagraj", "doga"];     // object
let myObj = {                                       // object
    name: "hitesh",
    age: 22,
}

const myFunction = function(){                      // function
    console.log("Hello world");
}

console.log(typeof myFunction);   // function

// https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++++++++

// Stack (Primitive) -> value , Heap (Non-Primitive) -> refernce

let myYoutubename = "vinitfaldu1010"

let anothername = myYoutubename;

anothername = "girishfaldu"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "vinit.faldu@google.com",
    upi: "1234"
}

let userTwo = userOne;

userTwo.email = "123@gmail.com";


console.log(userOne.email);
console.log(userTwo.email);