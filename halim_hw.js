let animals = [
  {
    name: "Cat",
    legs: 4,
  },
  {
    name: "Duck",
    legs: 2,
  },
  {
    name: "Dog",
    legs: 4,
  },
  {
    name: "Eagle",
    legs: 2,
  },
  {
    name: "Crocodile",
    legs: 4,
  },
]


// Tampilkan semua animals yg legs === 4

for(let i = 0; i < animals.length; i++)
{
  if(animals[i].legs === 4){
    console.log(animals[i].name)
  }
}

// Tambahkan 1 animals baru gunakan function

const addAnimal = ({name, legs}) => {
  animals.push({name: name, legs: legs});
  console.log(animals);
}

const dove = {
  name: "dove",
  legs: 2
}

const lion = {
  name: "Lion",
  legs: 4
}

addAnimal(dove)
addAnimal(lion)

