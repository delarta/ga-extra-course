// function introduction(name, callback) {
//   const ageInfo = callback();
//   return `Hello my name is ${name}, ${ageInfo}`;
// }


// console.log(introduction("Jolyne", function(){
//   return "His age is 20"
// }));


const introduction = (name, callback) => {
  const ageInfo = callback();
  return `Hello my name is ${name}, ${ageInfo}`;
}


console.log(introduction("Jolyne", () => "His age is 20"));