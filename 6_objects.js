// OBJECT
// Objects have properties. Every property has a name and a value.
// The value of a property can be of any type,
// which means that it can even be an object, as objects can nest other objects.

// === Initialize object ===
let person = {
  name: "Joseph Joestar", //property = key + value
  age: 19,
  country: "England",
  married: true,
  friends: ["Caesar Zeppeli", "Lisa Lisa", "Speedwagon"],
  address: {
    city: "London",
    block: 14,
  },
};

// === Accessing object ===
// console.log("Name : " , person.name)
// console.log("Age : ", person.age)
// console.log("Friend : ", person.friends[2])
// console.log("City : ", person.address.city)

// manipulating objects
// console.log("Before", person)

person.age = 20;
person.country = "Italy";
person.friends.push("Stroheim");

// console.log("After", person)

// === Combine 2 objects ===
let newPerson = {
  ...person,
  wife: "Suzy",
  superpower: "Hamon",
}

// let newPerson = Object.assign(
//   {
//     wife: "Suzy",
//     superpower: "Hamon",
//   },
//   person
// );
// console.log(newPerson);

// get keys
// console.log(newPerson)
let objKeys = Object.keys(person);




// Get Values
let objValues = Object.values(person);

// console.log(objValues)
// Get KEYS and VALUES

let keyVal = Object.entries(person).map(([k, v]) => {
  // console.log(`keys : ${k}, value : ${v}`)
  return `keys : ${k}, value : ${v}`;
});

// console.log(keyVal)
// console.log(objValues)

// console.log(keys)
// console.log(objValues)

// Object Deconstruct
// console.log("Name : " , person.name)
// console.log("Age : ", person.age)
// console.log("Friend : ", person.friends[2])
// console.log("City : ", person.address.city)

const { name, age, address } = person // Deconstruct

console.log(name)
console.log(age)
console.log(address.city)





// console.log(`Hello my name is ${name} I'm ${age} years old, I live in ${address.city}`)
