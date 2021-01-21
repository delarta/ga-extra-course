// const fetch = require("node-fetch");

// Resolve, Reject, Pending

let weather = "cloudy";
let loc = "Pool";

// let vacationPlan = (weatherInfo, location) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (weatherInfo === "sunny") {
//         resolve({ weatherInfo, location });
//       } else if (weatherInfo === "cloudy") {
//         resolve({ weatherInfo, location });
//       } else {
//         reject("Stay at Home");
//       }
//     }, 1500);
//   });

// Promise Chaining

// vacationPlan("sunny", "beach")
// .then((message) => {
//   let result = `Weather is ${message.weatherInfo}`
//   return result
// })
// .then((finalWeather) => {
//   console.log(finalWeather)
// })
// .catch((error)=>{
//   console.log(error)
// })

// ASYNC

// async function vacationAsync() {
//   try {
//     let vacationInfo = await vacationPlan("qweasd", "skydiving");
//     let result = `Weather is ${vacationInfo.weatherInfo}`;

//     console.log(result);
//   } catch (err) {
//     alert(err);
//   }
// }

// const vacationAsync = async () => {
//   try {
//     let vacationInfo = await vacationPlan("asdasd", "skydiving");
//     let result = `Weather is ${vacationInfo.weatherInfo}`;

//     console.log(result);
//   } catch (message) {
//     alert(message);
//   }
// }

// vacationAsync();

// vacationPlanAsync("sunny", "Mountain");

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

// FETCH

fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => {
  return response.json()
})
.then((data) => console.log(data.slice(0,10)))
.catch(err => console.log(err))


// const getData = async () => {
//   try{
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts")
//     let data = await response.json();
//     console.log(data)
//   }catch(err){
//     console.log(err)
//   }
// }

// getData()


















// fetch("https://ghibliapi.herokuapp.com/films")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// const catFactsAPI = "https://cat-fact.herokuapp.com";

// fetch(`${catFactsAPI}/facts/random?animal_type=cat&amount=1`)
//   .then((response) => {
//     return response.json();
//   })
//   .then((json) => {
//     console.log(json.text);
//   });

// const getCatFacts = async () => {
//   const catFactsAPI = "https://cat-fact.herokuapp.com";
//   try{
//     const response = await fetch(`${catFactsAPI}/facts/random?animal_type=cat&amount=1`)
//     const json = await response.json()
//     console.log(json.text)
//   }catch(err){
//     console.log("Error")
//   }
// }

// getCatFacts()
