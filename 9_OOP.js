// let name = "Joni";
// let age = 19;
// let address = "London";

// function displayPerson () {
//   console.log(`His name is ${name}, he is ${age} years old, he lives in ${address}`)
// }

// function displayName(){
//   console.log(`His name is ${name}`)
// }


let person = {
  name: "Jonathan",
  age: 17,
  address: "Egypt",
  displayPerson: function(){
    return `His name is ${this.name}, he is ${this.age} years old, he lives in ${this.address}`
  },
  displayName: function(){
    return `His name is ${this.name}`
  }
}

// console.log(person.displayName())


class Animal {
  constructor(name, legs, species, sound){
    this.name = name;
    this.legs = legs;
    this.species = species;
    this.sound = sound;
  }

  showInfo(){
    console.log(`${this.name} is a ${this.species} that has ${this.legs} legs`);
  }

  showSound(){
    console.log(`${this.species} goes ${this.sound}`)
  }

  static isAnimal(animal){
    if(animal === "cat"){
      console.log(`${animal} is an animal`)
    }else{
      console.log(`${animal} is NOT an animal`)
      
    }
  }

}

class Cat extends Animal {
  constructor(name, legs, species, sound, breed){
    super(name, legs, species, sound);
    this.breed = breed;
  }

  showBreed(){
    console.log(`It's ${this.breed} breed`)
  }
}

class Dog extends Animal {
  constructor(name, legs, species, sound, breed){
    super(name, legs, species, sound);
    this.breed = breed;
  }

  showBreed(){
    console.log(`It's ${this.breed} breed`)
  }
}

let Cathy = new Cat("Cathy", 4, "Cat", "Meow", "Persian")
let Dogthor = new Dog("Dogthor", 4, "Dog", "Woof", "Bulldog")

Cathy.showInfo()
// Cathy.showSound()

// Dogthor.showInfo()
// Dogthor.showSound()

// Cathy.isAnimal()


// Dog.isAnimal("cat");








