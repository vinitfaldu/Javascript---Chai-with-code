const firstName = "vinit"
const lastName = "faldu"
const age = 24

// console.log(firstName + lastName + age);

console.log(`Hello my first name is ${firstName} and my lastname is ${lastName} and i am ${age} years old`);

const gameName = new String('vinit')

console.log(gameName[0]);   // v
console.log(gameName[4]);   // t

console.log(gameName.__proto__);   // {}

console.log(gameName.length);   // 5

console.log(gameName.toUpperCase());    // VINIT -> not change original value bcz const is primitive

console.log(gameName.charAt(2));        // n -> vinit..... n is on 2 position
console.log(gameName.indexOf('n'));     // 2 -> third position character 

const newString = gameName.substring(2,5)
console.log(newString);