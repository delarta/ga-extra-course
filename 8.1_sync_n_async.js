let a = "Hello";
let b = "World";
let c = "I'm Alive!";
const x = "asdasdasd";

let monsters = ["Kikimore", "Vampire", "Ekkimara", "Nightwraith", "Werewolf"];
let cars = ["Toyota", "Daihatsu", "Mitsubishi"];

// SYNC

// console.log(a);

// console.log(b);

// console.log(c);

// for (let i = 0; i < monsters.length; i++) {
//   console.log(monsters[i])
// }

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i])
// }

// ASYNC

setTimeout(() => {
  console.log(a);
}, 2000);

setTimeout(() => {
  console.log(b);
}, 200);

setTimeout(() => {
  console.log(c);
}, 1500);

// CALLBACK
// const getInfo = (callback, time) => {
//   setTimeout(()=>{
//     callback("This world is wonderful")
//   }, time)
// }

// getInfo((text) => {console.log(text)}, 5000 )

// FETCH
// const catFactsAPI = "https://cat-fact.herokuapp.com";

// fetch(`${catFactsAPI}/facts/random?type=cat&amount=1`)
//   .then((res) => {
//     return res.json();
//   })
//   .then((json) => console.log(json.text));

// console.log("Last")
// console.log("Very Last")
