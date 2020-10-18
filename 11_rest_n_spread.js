let playList = [
  "Beneath The Surface",
  "Wither",
  "Hollow Years",
  "The Spirit Carries On",
  "Up",
  "Shingaling",
];

const addToPlaylist = (song1, song2, ...songs) => {
  // console.log(song)
  // console.log(...song)
  playList.push(song1, ...songs, song2);
};

addToPlaylist(
  "Back to back",
  "Immigrant Song",
  "Under Glass Moon",
  "Metropolis"
);


// Spread Operator
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

// console.log("person",person)

let newPerson = { ...person };

// person memory address = A
// newPerson memory address = A

// let newPerson = person;

newPerson.name = "Giorno Giovanna"

console.log("newPerson", newPerson)

console.log("person", person)




// addToPlaylist("Vision", "Angel of Death");

// addToPlaylist("Pale Blue Dot");

// console.log(playList);



// Default Value
const favNoodle = (noodle = "indomie") => {

  switch(noodle.toLowerCase()){
    case "indomie":
      return "Seleraku";
    case "sedaap":
      return "Jelas Terasa Sedapnya";
    case "burung dara":
      return "Enaknya nyambung terus";
    default:
      return "Bukan Mie";
  }
}

// console.log(favNoodle())
// console.log(favNoodle("InDOmiE"))
// console.log(favNoodle("sedaap"))
// console.log(favNoodle("buRung dara"))





