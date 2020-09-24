// FUNCTIONS
// Everything in JavaScript happens in functions.
// A function is a block of code, self contained, that can be defined once and run any times you want.

// REGULAR FUNCTION
function doSomething(input) {
  return input * 2
}

let numTen = doSomething(5) // 10

// let result = numTen + 5

// console.log(numTen)

// ARROW FUNCTION
const doSomethingElse = (input) => {
  return input;
};

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

const displayPerson = ({name, country, age}) => {
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
  let monsterList = ""

  for (let i = 0; i < arr.length; i++) {
    monsterList += ` ${arr[i].name} is a ${arr[i].type} type monster \n`
  }

  return monsterList
};

console.log(displayMonsters(monsters))

// Explain var let const