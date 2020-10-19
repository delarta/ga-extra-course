let a = "Hello"
let b = "World"
let c = "I'm Alive!"
// SYNC

// console.log(a)
// console.log(b)
// console.log(c)


// ASYNC

// setTimeout(()=> {
//   console.log(a)
// }, 2000 )

// setTimeout(()=> {
//   console.log(b)
// }, 200 )

// setTimeout(()=> {
//   console.log(c)
// }, 3000 )

// CALLBACK
const getInfo = (callback, time) => {
  setTimeout(()=>{
    callback("This world is wonderful")
  }, time)
}

getInfo((text) => {console.log(text)}, 5000 )



// FETCH
// const catFactsAPI = "https://cat-fact.herokuapp.com";

// fetch(`${catFactsAPI}/facts/random?type=cat&amount=1`)
//   .then((res) => {
//     return res.json();
//   })
//   .then((json) => console.log(json.text));

// console.log("Last")
// console.log("Very Last")
