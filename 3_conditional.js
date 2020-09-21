// Make decision based on condition

// IF statement
let animal = "goat";
let breed = "anggora";

if (animal === "cat") {
  console.log("Feed Me Hooman!");

  if(breed === "persian"){
    console.log("I'm Persian!");
  }

} else if (animal === "dog") {
  console.log("Play With Me Hooman!");
} else {
  console.log(`I don't know what to do with ${animal}`);
}

// SWITCH Statement

switch (animal) {
  case "cat":
    console.log("Feed Me Hooman!");
    break;
  case "dog":
    console.log("Play With Me Hooman!");
    break;
  default:
    console.log(`I don't know what to do with ${animal}`);
}

// switch (animal) {
//   case "cat": {
//     let name = "Joni"
//     return console.log(`Feed Me, ${name}!`);
//   }
//   case "dog":
//     return console.log("Play With Me Hooman!")
//   default: return console.log(`I don't know what to do with ${animal}`);
// }
