// VARIABLES
var newVar = "x";

let newVar2;
const newVar3 = "x";

// Primitive data types : Number, String, Boolean, Symbol
// Special types : null, undefined
// Anything that's not primitive type is Object Types

// NUMBER
// Every Number is a float, but depend on the writting

// 1.5 , 4.0 float
// 4 integer

// Integer
let num = 10;

// Float
let otherNum = 3.14;

// STRINGS
// Regular String
let str = "Life";

// Joined String
let strJoined = str + " is Beautiful ";

// let otherStr = "Don't give up, " + strJoined + " " + num;

// Template Literal
// Backtick ``
let otherStr = `Don't give up, ${strJoined} ${num}`;

// console.log(otherStr)

// BOOLEAN (true, false)
let isOpen = true;

//
// Falsy values are : 0, -0, NaN, undefined, null, ''
let isTrue = "";

// if(isTrue){
//   console.log("Sesuatu")
// }else{
//   console.log("Falsy!")
// }

// NULL
// is a special value that indicates the absence of a value.
let something = null;

// UNDEFINED
// indicates that a variable has not been initialized and the value is absent.
let whoami;

// OBJECT

let person = {
  name: "Joseph Joestar",
  age: 19,
  country: "England",
  married: true,
  friends: ["Caesar Zeppeli", "Lisa Lisa", "Speedwagon"],
  address: {
    city: "London",
    block: 14,
  },
};

console.log(`${person.name} lives in ${person.address.city}`);

// ARRAY
let monsters = [
  "Kikimore", 
  0, 
  { key: "value" }, 
  null, 
  "werewolf"
];
