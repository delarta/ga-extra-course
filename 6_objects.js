// OBJECT
// Objects have properties. Every property has a name and a value.
// The value of a property can be of any type, 
// which means that it can even be an object, as objects can nest other objects.

// === Initialize object ===
let person = {
  name: "Joseph Joestar",
  age: 19,
  country: "England",
  married: true,
  friends: ["Caesar Zeppeli", "Lisa Lisa" ,"Speedwagon"],
  address: {
    city: "London",
    block: 14
  }
}

// === Accessing object ===
// console.log("Name : " , person.name)
// console.log("Age : ", person.age)
// console.log("Friend : ", person.friends[2])
// console.log("City : ", person.address.city)









// manipulating objects
// console.log("Before", person)

person.age = 20
person.country = "Italy"
person.friends.push("Stroheim")

// console.log("After", person)















// === Combine 2 objects ===
let newPerson = {
  ...person,
  wife: "Suzy",
  superpower: "Hamon",

  // person
  // person : {
  //   name: "Joseph Joestar",
  //   age: 19,
  //   country: "England",
  //   married: true,
  //   friends: ["Caesar Zeppeli", "Lisa Lisa" ,"Speedwagon"],
  //   address: {
  //   city: "London",
  //   block: 14
  // }}
  
  // ...person 
  // name: "Joseph Joestar",
  //   age: 19,
  //   country: "England",
  //   married: true,
  //   friends: ["Caesar Zeppeli", "Lisa Lisa" ,"Speedwagon"],
  //   address: {
  //   city: "London",
  //   block: 14
}

console.log(newPerson)


// let newPerson = Object.assign(additionalInfo, person)








// get keys 
// console.log(newPerson)
let objKeys = Object.keys(newPerson);


// Get Values
let objValues = Object.values(newPerson);



// Get KEYS and VALUES

let keyVal = Object.entries(person).map(
  ([k, v]) => {
    // console.log(`keys : ${k}, value : ${v}`)
    return `keys : ${k}, value : ${v}`
  }
)

// console.log(keyVal)
// console.log(objValues)

// console.log(keys)
// console.log(objValues)

// Object Deconstruct

const { name, age, address } = newPerson ;

// console.log(`Hello my name is ${name} I'm ${age} years old, I live in ${address.city}`)
