let score = "33abc"

//console.log(typeof score)       // string 
//console.log(typeof (score))     // string

let valueInNumber = Number(score)   
//console.log(typeof valueInNumber)   // number
//console.log(valueInNumber)          // Not a number

// 33 => 33
// 33abc => NaN
// numm => 0
// undefined => NaN
// true => 1, false => 0

let isLoggedIn = 0
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true
// "vinit" => true, "" => false

let str1 = "hello"
let str2 = " vinit"

let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2)         // 12
// console.log(1 + "2")         // 12
// console.log("1" + 2 + 2)     // 122
// console.log(1 + 2 + "2")     // 32

console.log(true);      //true
console.log(+true)      // 1
// console.log(true+); //error
console.log(+"");       // 0

