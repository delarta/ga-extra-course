// LOOPS

let monsters = [
  "Kikimore", //value
  "Vampire", 
  "Ekkimara", 
  "Nightwraith", 
  "Werewolf",
  "Bob"
]

// console.log(monsters.length)

// FOR Loops
// for (let i = 0; i < monsters.length; i++) {
//   console.log(i , monsters[i])
// }











// WHILE Loop
let x = 0

// while (x < 0) {
//   console.log(`${x+1}. ${monsters[x]}`)
//   x++;
// }

// DO WHILE
let y = 0

do {
  console.log(`${y+1}. ${monsters[y]}`) // y = 0
  y++ // y = 0
} while (y < 0) // y = 1

// FOR OF

// for(let value of monsters){
//   console.log(value)
// }


// HIGHER ORDER 
// monsters.map(
//   (item, index) => { console.log(`${index+1} ${item}`) }
// )