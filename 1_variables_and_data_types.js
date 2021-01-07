// VARIABLES
var newVar = "Variable Baru";

let nama = "Delarta";

const gender = "male";

nama = "Joni";

// console.log(gender)

// Primitive data types : Number, String, Boolean, Symbol
// Special types : null, undefined
// Anything that's not primitive type is Object Types

// NUMBER
// Every Number is a float, but depend on the writting

// 1.5 , 4.0 float
// 4 , 10 , 11 integer

// Integer
let num = 10;

// Float
let otherNum = 3.14;

// STRINGS
// Regular String
let str = "Life";
let strSingle = "is Beautiful";

let strNum = "10";

let resultStr = strNum + num;

// console.log(resultStr)

let strJoin = str + " " + strSingle + ", isn't it? " + num;
// "Life is Beautiful"

let strBacktick = `${str} ${strSingle}, isn't it? ${num}`;

// Joined String

let strA = "My name is";
let strB = "Johnny";

// let strJoined = str + " is Beautiful, isn't it ?"; //life is beautiful
let strJoined = strA + strB + " I live in London"; //life is beautiful

// let otherStr = "Don't give up, " + strJoined + " " + num;

// Template Literal
// Backtick ``
// let otherStr = `Don't give up, ${strJoined} ${num}`;

// console.log(strBacktickJoined)
// console.log(otherStr)
// console.log(otherStr)

// BOOLEAN (true, false)

let isOpen = true;

// Falsy values are : 0, -0, NaN, undefined, null, ''
let isTrue = "";

// let input = "asdhgajsd";

// if(input){
//   console.log("yes")
// }else{
//   console.log("no")
// }

// NULL
// is a special value that indicates the absence of a value.
let something = null;

// UNDEFINED
// indicates that a variable has not been initialized and the value is absent.
let whoami;

// OBJECT

let animal = {
  type: "Cat",
  name: "Justin",
  breed: "Anggora",
};

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

// ARRAY
// let monsters = ["Kikimore", 0, { key: "value" }, null, "werewolf"];

let animals = ["Cat", "Dog", "Turtle"];

let oddNum = [1, 3, 5, 7];

let persons = [
  {
    name: "Joseph Joestar",
    age: 19,
    country: "England",
    married: true,
    friends: ["Caesar Zeppeli", "Lisa Lisa", "Speedwagon"],
    address: {
      city: "London",
      block: 14,
    },
  },
  {
    name: "Jonathan Joestar",
    age: 17,
    country: "England",
    married: true,
    friends: ["Caesar Zeppeli", "Lisa Lisa", "Speedwagon"],
    address: {
      city: "Paris",
      block: 14,
    },
  },
];

console.log(persons[1].name)
console.log(persons[1].age)
console.log(persons[1].address.city)
console.log(persons[1].friends[1])

let fruits = ["apple", "orange", "mango", "lemon"]; //0, 1, 2 ,3

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
