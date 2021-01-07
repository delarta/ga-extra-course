// LOOPS

let monsters = [
  "Kikimore", //value
  "Vampire",
  "Ekkimara",
  "Nightwraith",
  "Werewolf",
  "Bona",
  "Rong Rong",
];

// console.log(monsters[0])
// console.log(monsters[1])
// console.log(monsters[2])
// console.log(monsters[3])
// console.log(monsters[4])

// console.log(monsters)

// FOR Loops
// for(let a = 0; a < 10; a++){
//   console.log(a)
// }
// for(let a = 9; a >= 0; a--){
//   console.log(a)
// }

// console.log(monsters.length)
// for (let a = 0; a < monsters.length; a++) {
//   if (monsters[a] === "Werewolf") {
//     break;
//   }
//   console.log(monsters[a]);
// }

// for(let i = 1; i <= 10; i++){
//   if(i%2 === 0){
//     console.log(`${i} Genap`)
//   }else{
//     console.log(`${i} Ganjil`)
//   }
// }

// for(let i = monsters.length - 1; i >= 0; i--){
//   console.log(monsters[i])
// }
// i = 0 ==> 0 ==> i + 1 = 1
// i = 1 ==> 1 ==> i + 1 = 2
// ...
// i = 8 ==> 8 ==> i + 1 = 9
// i = 9 ==> 9 ==> i + 1 = 10
// i = 10

// WHILE Loop
let x = 0;

let isMonsterFound = false;

while (x < monsters.length) {
  if (monsters[x] === "Nightwraith") {
    isMonsterFound = true;
    // console.log(`${monsters[x]}, is found!`);
  } else {
    console.log(monsters[x]);
  }
  x++;
}

// DO WHILE
let y = 100;

// do {
//   console.log(monsters[0]);
//   y++;
// } while (y < monsters.length);

// FOR OF

// for(let monster of monsters){
//   console.log(monster)
// }

// HIGHER ORDER
// monsters.map(
//   (item, index) => { console.log(`${index+1} ${item}`) }
// )
