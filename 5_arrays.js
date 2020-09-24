// ARRAY

// assigment
let monsters = [ "Kikimore", "Vampire", "Ekkimara", "Nightwraith", "Werewolf" ]

// Append new array, insert new element at the END of and array
// monsters.push("Ghouls")
// monsters.push("Chort")


// Spread Operator way
// monsters = [...monsters, "Ghouls", "Chort"]


// Insert new elements at the START of an array
// monsters.unshift("Griffin")

// Spread Operator way
// monsters = ["Griffin", ...monsters ]


// console.log(monsters)


// remove last element from an array
// monsters.pop()




// remove first element from an array
// monsters.shift()

// console.log(monsters)
console.log("Before: ",monsters)

// let newMonster = []

for (let i = 0; i < monsters.length; i++) {
  if(i !== 1){
    newMonster.push(monsters[i]) //["Kikimore", "Ekkimara", "Nightwraith", Werewolf]
  }
}

// scope
// for(let i = 10; i >= 0; i = i - 2){
//   console.log(i) //10 , 8, 6, 4, 2, 0
// }

monsters.splice(2, 2)

console.log("After: ",monsters)

// SPREAD OPERATOR


