// Make decision based on condition

let condition = false;

let name = "joseph";

let person = {
  name: "Joseph",
  age: 19,
  country: "England",
  married: true,
  friends: ["Caesar Zeppeli", "Lisa Lisa", "Speedwagon"],
  address: {
    city: "London",
    block: 14,
  },
};

// if (name === "joni") {
//   console.log("Joni is Blacklisted");
// } else if (name === "justin") {
//   console.log("Justin is Blacklisted");
// } else if (name === "joseph") {
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
let animal = "goat";
let breed = "anggora";

// if (animal === "cat") {
//   console.log("Feed Me Hooman!");

//   if(breed === "persian"){
//     console.log("I'm Persian!");
//   }

// } else if (animal === "dog") {
//   console.log("Play With Me Hooman!");
// } else {
//   console.log(`I don't know what to do with ${animal}`);
// }

// SWITCH Statement

let input = 2;
let weather = "sunny";
if(true){
  switch (input) {
    case 1:
      console.log("January");
      break;
    case 2:
      console.log("February");
      if (weather === "sunny") {
        console.log("Gowes");
      } else {
        console.log("Sleep");
      }
      break;
    case 3:
      console.log("March");
      break;
    default:
      console.log("Not a valid month!");
  }

}else{

}

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
