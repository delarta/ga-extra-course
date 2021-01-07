// ES6
// Template literal

let firstName = "Jonathan";
let lastName = "Joestar";

let fullName = firstName + " " + lastName + " is a Male";

let fullNameTL = `${firstName} ${lastName} is a Male`;

// console.log(fullName);
// console.log(fullNameTL);

// Let & Const
// var age = 18;
let city = "London";

city = "Ponorogo";

// const gender = "Male";

// console.log(city)
// console.log(gender)

// Arrow function
function multiply(a, b) {
  console.log(a * b);
}

const multiply2 = (a, b) => console.log(a * b);

// multiply2(2, 8);

const introduction = (name) => console.log(`Hi my name is ${name}`);

// introduction("Justin")

const isGreaterThan = (x, y) => {
  if (x > y) {
    console.log("True");
  } else {
    console.log("False");
  }
};

// isGreaterThan(10, 10)

function discount(price, percentage) {
  // 20/100 *  100000
  let result = (percentage / 100) * price;
  return result;
}

const discount2 = (price, percentage) => price - (percentage / 100) * price;

// console.log(discount2(200000, 80))

// Class & subclass

class Animal {
  constructor({ color, gender, sound }) {
    this.color = color;
    this.gender = gender;
    this.sound = sound;
  }

  getSound = () => {
    return this.sound;
  };
}

class Sheep extends Animal {
  constructor({ color, gender, sound, name, age }) {
    super({ gender, color, sound });
    this.name = name;
    this.age = age;
  }
}

class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let cat = new Cat(17);

// console.log(cat)

let sheepInfo = {
  color: "Pink",
  gender: "Female",
  sound: "Mbee",
  name: "Sheepy",
  age: 17,
};

let sheepy = new Sheep(sheepInfo);

// console.log(sheepy);

// DESCTRUCTURE

const { name, age } = sheepy;

// console.log(name);
// console.log(color);
// console.log(gender);
// console.log(sound);
// console.log(age);

let monsters = ["Kikimore", "Vampire", "Ekkimara", "Nightwraith", "Werewolf"];

const [, , monsterB] = monsters;

// console.log(monsterA)
// console.log(monsterB);
// console.log(monsterC)

// console.log(monsters[2])

// TERNARY OPERATOR

let weather = "rain";

let result = "";

if (weather === "clear") {
  result = "Go Out!";
} else {
  result = "Stay at Home!";
}

// console.log(result)

let money = undefined;

let result2 = weather === "clear" ? "Go Out!" : "Stay at Home!";

let isLessThan = 1 < 3 ? true : false;

let totalMoney = money || 0;

let isValid = undefined && "asdasd";

// console.log(totalMoney)
// console.log(isValid)

// HOF

// for (let i = 0; i < monsters.length; i++) {
//   console.log(monsters[i])
// }

// forEach
let monstersDetail = [
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

console.log(monstersDetail)
// for (let i = 0; i < monstersDetail.length; i++) {
//   console.log(monstersDetail[i].type)
// }

// monstersDetail.forEach((monster) => console.log(monster.type));

// map

let monstersType = monstersDetail.map((monster) => monster.type);
// console.log(monstersType);

// filter

let monstersNoVampire = monstersDetail.filter((monster) => monster.name === "Ekimmara");

// console.log(monstersNoVampire)

// find
let findOne = monstersDetail.find((monster) => monster.name === "Ekimmara");

// console.log(findOne)

// for (let monster of monsters){
//   console.log(monster)
// }

// for (let info in sheepInfo){
//   console.log(info)
// }


// SPREAD

// monsters.push("Griffin")

// monsters = ["Gorgon", ...monsters]

console.log(monsters)

const [monstA, monstB, ...otherMonster ] = monsters
console.log(monstA)
console.log(monstB)
console.log(otherMonster)
