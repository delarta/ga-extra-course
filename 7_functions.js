// FUNCTIONS
// Everything in JavaScript happens in functions.
// A function is a block of code, self contained, that can be defined once and run any times you want.

// REGULAR FUNCTION
// function greetings(name){
//   console.log(`Hello ${name}`)
// }

// greetings("Delta")
// greetings("Tok")

function multiply(a, b = 2) {
  console.log(a * b);
}

// multiply(9, 3);

function discount(price, percentage) {
  // 20/100 *  100000
  let result = (percentage / 100) * price;
  return result;
}

let price = 200000;
let percentage = 19;

let finalPrice = price - discount(price, percentage);

// console.log(finalPrice);

// multiply(12, 3)

// let result = numTen + 5

// console.log(numTen)

// ARROW FUNCTION
// const substract = (a, b) => {
//   return a - b
// }

const substract = (a, b) => a - b;

const sayHello = () => console.log("Hello");

// console.log(substract(10, 8))

// console.log(circleArea(14))

// sayHello()

// const areaOfCircle = r => 3.14 * r * r

// Volume tabung
let jari_jari = 7;
let tinggi = 8;

const volumeTabung = (t, r, callback) => {
  return t * callback(r);
};

// let result = volumeTabung(tinggi, jari_jari, function (r) {
//   return 3.14 * r * r;
// });
let result = volumeTabung(tinggi, jari_jari, (r) => 3.14 * r * r);

console.log(result);

// console.log(doSomethingElse("something"))

// OBJECT AS PARAMETER
const person = {
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

const displayPerson = ({ name, country, age }) => {
  let str = `This person name is ${name} from ${country}, he's ${age} years old`;

  return console.log(str);
};

// displayPerson(person);

// ARRAY AS PARAMETER
let monsters = [
  {
    name: "Kikimore",
    type: "Insectoids",
  },
  {
    name: "Bruxa",
    type: "Vampire",
  },
  {
    name: "Ekimmara",
    type: "Vampire",
  },
  {
    name: "Nightwraith",
    type: "Wraith",
  },
  {
    name: "Werewolf",
    type: "Cursed",
  },
];

// let monsters = ["Kikimore", "Vampire", "Ekkimara", "Nightwraith", "Werewolf"]

const displayMonsters = (arr) => {
  let monsterList = "";

  for (let i = 0; i < arr.length; i++) {
    monsterList += ` ${arr[i].name} is a ${arr[i].type} type monster \n`;
  }

  return monsterList;
};

// console.log(displayMonsters(monsters))

// Explain var let const
