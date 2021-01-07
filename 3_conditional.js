// Make decision based on condition

let condition = false;

let isRaining = true;
let weather = "clear";
let isBlueSky = false;

// if (weather === "clear") {
//   console.log("Go to beach!");
//   if(isBlueSky){
//     console.log("The sky is blue")
//   }else{
//     console.log("The sky is okay")
//   }
// } else if (weather === "bad" || isRaining) {

//   console.log("maybe");
// } else {
//   console.log("rejected");
// }

let num1 = null;
let num2 = 7;
let operator = "kjhask";

if (num1 !== null && num2 !== null && operator) {
  let result = 0;

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else {
    result = "Unrecognize operator!";
  }

  console.log(result);
} else {
  console.log("Please input number");
}

// if (weather === "clear" || weather === "sunny" || weather === "hot") {
//   console.log("fulfilled");
// } else if (weather === "bad" || isRaining) {
//   console.log("maybe");
// } else {
//   console.log("rejected");
// }

// let person = {
//   name: "Joseph",
//   age: 19,
//   country: "England",
//   married: true,
//   friends: ["Caesar Zeppeli", "Lisa Lisa", "Speedwagon"],
//   address: {
//     city: "London",
//     block: 14,
//   },
// };

let nama = "joni";

// if (nama === "joni") {
//   console.log("Joni is Blacklisted");
// } else if (nama === "justin") {
//   console.log("Justin is Blacklisted");
// } else if (nama === "joseph") {
//   console.log(`His name is ${person.name}, he is ${person.age} years old`);
// } else {
//   console.log("Access Granted!");
// }

// if(condition){
//   console.log("True")
// } else {
//   console.log("False")
// }

// IF statement
// let animal = "cat";
// let breed = "persian";

// if (animal === "cat") {
//   console.log("Feed Me Hooman!");

//   if(breed === "persian"){
//     console.log("I'm Persian!");
//   }
// }
// else if (animal === "dog") {
//   console.log("Play With Me Hooman!");
// } else {
//   console.log(`I don't know what to do with ${animal}`);
// }

// SWITCH Statement

let input = 2;
// let weather = "hot";

// switch(weather){
//   case "sunny":
//   case "clear":
//   case "hot":
//     console.log("Go to beach!!");
//     break;
//   case "cloudy":
//     console.log("Hmm I need to think about it");
//     break;
//   default:
//     console.log("Don't know what to do")
// }

// switch (weather) {
//   case "sunny": {
//     return console.log("Go to beach!!");
//   }
//   case "cloudy": {
//     return console.log("Hmm I need to think about it");
//   }
//   default: {
//     return console.log("Don't know what to do");
//   }
// }

// }
let animal = "cat";
let breed = "persian";

// switch(animal){
//   case "cat":
//     console.log("This is Cat!");
//     break;
//   case "dog":
//     console.log("This is Dog!");
//     break;
//   default:
//     console.log("Unrecognize animal");
//     break;
// }

// switch (animal) {
//   case "cat":
//     console.log("Feed Me Hooman!");
//     break;
//   case "dog":
//     console.log("Play With Me Hooman!");
//     break;
//   default:
//     console.log(`I don't know what to do with ${animal}`);
// }

// switch (animal) {
//   case "cat": {
//     let name = "Joni"
//     return console.log(`Feed Me, ${name}!`);
//   }
//   case "dog":
//     return console.log("Play With Me Hooman!")
//   default: return console.log(`I don't know what to do with ${animal}`);
// }
