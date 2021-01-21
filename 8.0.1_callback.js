// function introduction(name, callback) {
//   const ageInfo = callback();
//   return `Hello my name is ${name}, ${ageInfo}`;
// }

// console.log(introduction("Jolyne", function(){
//   return "His age is 20"
// }));

// const introduction = (name, callback) => {
//   const ageInfo = callback(33, "London");
//   return `Hello my name is ${name}, ${ageInfo}`;
// };
const introduction = (name, callback) => {
  let nameInfo = `Hello my name is ${name}`
  return callback(nameInfo, 33, "London") ;
};

const otherInfo = (name, age, place) => {
  return `${name}, I'm ${age} years old, I live in ${place}`
}

console.log(introduction("Johnny", (name, age, place) => {
  return `${name}, I'm ${age} years old, I live in ${place}`
}))




// const ageInfo = (age, place) => {
//   return `His age is ${age}, he live in ${place}`;
// };

// console.log(introduction("Jolyne", ageInfo));
