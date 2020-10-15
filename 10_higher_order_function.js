let monsters = [
  "Kikimore", //value
  "Vampire",
  "Ekkimara",
  "Nightwraith",
  "Werewolf",
  "Bona",
  "Rong rong",
];

// for(let i = 0; i < monsters.length ; i++){
//   console.log(`${i+1}. ${monsters[i]}`)
// }

// MAP
// monsters.map((monster, index) => `${index+1}. ${monster}`)



// let newMonster = []

// for(let i = 0; i < monsters.length ; i++){
//   if(monsters[i] !== "Bona"){
//     newMonster.push(monsters[i])
//   }
// }

// console.log(newMonster)

// FILTER

let monsterFiltered = monsters.filter(monster => monster !== "Bona");


// monsters.filter((monster) => {
//   if (monster !== "Bona" && monster !== "Vampire") {
//     return true;
//   } 
//   // else {
//   //   return false;
//   // }
// });


// console.log(monsterFiltered);

const removeMonster = (monsterName) => {
  return monsters.filter(monster => monster !== monsterName)
}

console.log(removeMonster("Rong rong"))


// FIND


let findMonster = monsters.find((monster) => {
  if(monster === "Bona"){
    return true
  }
})

// console.log(findMonster)

