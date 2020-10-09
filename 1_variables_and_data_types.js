// VARIABLES
var newVar = `sdfsdfsd fgfggf`;

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
let strSingle = 'Life';
let strBacktick = `Life`;

// Joined String

let strA = "My name is";
let strB = "Johnny"

// let strJoined = str + " is Beautiful, isn't it ?"; //life is beautiful
let strJoined = strA + strB + " I live in London" ; //life is beautiful
let strBacktickJoined = `${strA} ${strB} I live in london`
// let otherStr = "Don't give up, " + strJoined + " " + num;

// Template Literal
// Backtick ``
// let otherStr = `Don't give up, ${strJoined} ${num}`;

console.log(strBacktickJoined)
// console.log(otherStr)
// console.log(otherStr)

// BOOLEAN (true, false)
let isOpen = true;

// Falsy values are : 0, -0, NaN, undefined, null, ''
let isTrue = "";

// if(isOpen){
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

// console.log(whoami)

// OBJECT

// let animal = {
//   name: "cat",
//   breed: "anggora"
// }

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

// console.log(person.friends)

// console.log(person.name, person.age);

// console.log(`${person.name} lives in ${person.address.city}`);

// ARRAY
let monsters = ["Kikimore", 0, { key: "value" }, null, "werewolf"];

let fruits = ["apple", "orange", "mango", "lemon"] //0, 1, 2 ,3

// console.log(fruits)

// LET n CONST

// let primeNumber = 1; //let primeNumber be 1

// primeNumber = 3;

// console.log(primeNumber);

// const pi = 3.14;

// console.log(pi);


// const url = "www.google.com"




