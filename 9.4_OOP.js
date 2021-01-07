class Human {
  constructor(name, gender, isAlive) {
      this.name = name;
      this.gender = gender;
      this.isAlive = isAlive;
  }

  existenceCheck = () => {
      return this.isAlive ? `Yes I'm still alive` : `oops dead! lol no just kidding`
  }

  genderCheck = () => {
      return this.gender === "female" ? `She's a ${this.gender}`
      : this.gender === "male" ? `He's a ${this.gender}`
      : `ask the person directly :)`;
  }

  isKind = (character) =>  {
    return `${this.genderCheck() === "She's a female" ? "She" 
    : this.genderCheck() === "He's a male" ? "He" 
    : "That person"} is a ${character} person`
  }

  static isBreathing() {
      return `That person does breath! No debate`
  }

  static needFood = true;
}

// function biasa
// Human.prototype.isKind = function(character) {
//   return `${this.genderCheck() === "She's a female" ? "She" 
//   : this.genderCheck() === "He's a male" ? "He" 
//   : "That person"} is a ${character} person`
// }

// console.log(mySelf.isKind("just"));

// coba pake arrow function


let mySelf = new Human("Joni", "female", true)


console.log(mySelf.isKind("bad"));
console.log(mySelf.existenceCheck());
console.log(mySelf.genderCheck());

console.log(Human.isBreathing())