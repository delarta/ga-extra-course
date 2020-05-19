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
//   if(animals[i].legs > 2){
//     newAnimals.push(animals[i])
//   }
// }

// map built-in function
let newAnimals = animals.filter((item) => { 
  return item.legs > 2
})

console.log(newAnimals)


