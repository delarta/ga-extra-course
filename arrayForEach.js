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

// traditional for loop
// for (let i = 0; i < animals.length; i++) {
//   console.log(animals[i].sound)
// }

// forEach built-in function
animals.forEach((item) => { 
  console.log(item.sound)
})

// console.log(newAnimals)


