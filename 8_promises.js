// const fetch = require("node-fetch");

// let p = new Promise((resolve, reject) => {
//   let sum = 1 + 2;
//   if(sum === 2){
//     resolve("Success")
//   }else{
//     reject("Failed")
//   }
// })

// console.log(p)
// p
// .then((message) => {
//   console.log(message); //Success
// })
// .catch((message) => {
//   console.log(message);
// });

// const meetUp = (isJadi) => {
//   return new Promise((resolve, reject) => {
//     if (isJadi) {
//       resolve("Go out with friends");
//     } else {
//       reject("Play video games");
//     }
//   });
// };

// meetUp(true)
//   .then((message) => console.log(message))
//   .then(() => console.log("Jalan2 ke pantai"))
//   .catch((message) => console.log(message));

const catFactsAPI = "https://cat-fact.herokuapp.com";

fetch(`${catFactsAPI}/facts/random?type=cat&amount=1`)
  .then((res) => {
    return res.json();
  })
  .then((json) => console.log(json));
