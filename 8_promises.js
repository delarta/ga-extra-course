// const fetch = require("node-fetch");

// const janjiCallback = (callback1, callback2) => {
//   const weather = "clear"
//   if (weather !== "rain") {
//     return callback1({
//       message: "Berangkat",
//       status: "OK",
//     });
//   } else {
//     return callback2({
//       message: "Mager",
//       status: "GAGAL",
//     });
//   }
// }

// // janjiCallback(()=> {

// // })

// const janji = new Promise((resolve, reject) => {
//   const weather = "rain";
//   if (weather !== "rain") {
//     return resolve({
//       message: "Berangkat",
//       status: "OK",
//     });
//   } else {
//     return reject({
//       message: "Mager",
//       status: "GAGAL",
//     });
//   }
// });

// // promise chain
// janji
//   .then((res) => {
//     console.log(res.message);
//   })
//   .then(() => {
//     console.log("Senang senang yee!")
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// let p = new Promise((resolve, reject) => {
//   let sum = 1 + 1;
//   if(sum === 2){
//     resolve("Success")
//   }else{
//     reject("Failed")
//   }
// })

// console.log(p)

// p.then((message) => {
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

// const catFactsAPI = "https://cat-fact.herokuapp.com";

fetch(`${catFactsAPI}/facts/random?animal_type=cat&amount=1`)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json.text);
  });


const getCatFacts = async () => {
  const catFactsAPI = "https://cat-fact.herokuapp.com";
  try{
    const response = await fetch(`${catFactsAPI}/facts/random?animal_type=cat&amount=1`)
    const json = await response.json()
    console.log(json.text)
  }catch(err){
    console.log("Error")
  }
}

getCatFacts()