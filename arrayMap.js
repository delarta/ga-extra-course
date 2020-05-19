const animals = [
  {
    type: "Cat",
    sound: "Meow!",
    legs: 4
  },
  {
    type: "Dog",
    sound: "Woof!",
    legs: 4
  },
  {
    type: "Duck",
    sound: "Quack!",
    legs: 2
  },
]

// let newAnimals = []

// traditional for loop
// for (let i = 0; i < animals.length; i++) {
//   newAnimals.push(animals[i].type)
// }

// map built-in function
let newAnimals = animals.map((item) => { 
  return item.type
})

console.log(newAnimals)


