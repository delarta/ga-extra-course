
// function whatDayAfter(hari) {
//   if (hari === "senin") {
//     return "Besok adalah hari selasa";
//   } else if (hari === "selasa") {
//     return "Besok adalah hari rabu";
//   } else if (hari === "rabu") {
//     return "Besok adalah hari kamis";
//   } else if (hari === "kamis") {
//     return "Besok adalah hari jum'at";
//   } else if (hari === "jum'at") {
//     return "Besok adalah hari sabtu";
//   } else if (hari === "sabtu") {
//     return "Besok adalah hari minggu";
//   } else if (hari === "minggu") {
//     return "Besok adalah hari senin";
//   } else {
//     return "Bukan nama hari";
//   }
// }

const whatDayAfter = hari => {
  if (hari === "senin") {
    return "Besok adalah hari selasa";
  } else if (hari === "selasa") {
    return "Besok adalah hari rabu";
  } else if (hari === "rabu") {
    return "Besok adalah hari kamis";
  } else if (hari === "kamis") {
    return "Besok adalah hari jum'at";
  } else if (hari === "jum'at") {
    return "Besok adalah hari sabtu";
  } else if (hari === "sabtu") {
    return "Besok adalah hari minggu";
  } else if (hari === "minggu") {
    return "Besok adalah hari senin";
  } else {
    return "Bukan nama hari";
  }
};

function sum(num1, num2) {
  if(typeof num1 === "number" && typeof num2 === "number"){

    return num1 + num2;
  }else{
    return "Not a";

  }
}

const sumArrow = (num1, num2) => num1 + num2;



console.log(sumArrow(100, 40));
console.log(whatDayAfter("senin"));
