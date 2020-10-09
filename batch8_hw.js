// Buat program untuk mengecek nilai ganjil atau genap
// Tipe data harus Number

// 1. buat variabel dengan nama number
// 2. beri nilai variabel = 3
// let number = 1200;
// // 3. apakah nilai variabel 'number' habis dibagi 2
// if(number % 2 === 0){
//   // 4. jika habis, maka tampilkan pesan 'Angka Genap'
//   console.log(`${number} adalah angka genap`)
// }else{
//   // 5. jika ada sisa hasil bagi, maka tampilkan pesan 'Angka Ganjil'
//   console.log(`${number} adalah angka ganjil`)
// }

// let input = "89343";
// console.log(input%2)

// console.log(typeof(typeof input))
// console.log(typeof input)
// if (typeof input === "number") {
//   if (input % 2 === 0) {
//     console.log(`${input} adalah angka genap`);
//   } else {
//     console.log(`${input} adalah angka ganjil`);
//   }
// } else {
//   console.log(`Tipe data tidak sesuai`);
// }

// if (typeof input === "number") {
//   if (input % 2 === 0) {
//     if(input >= 0){
//       console.log(`${input} adalah angka genap positif`);
//     }else{
//       console.log(`${input} adalah angka genap negatif`);
//     }
//   } else {
//     if(input < 0){
//       console.log(`${input} adalah angka ganjil positif`);
//     }else{
//       console.log(`${input} adalah angka ganjil negatif`);
//     }
//   }
// } else {
//   console.log(`Tipe data tidak sesuai`);
// }

// if(input % 2 === 0){
//   console.log(`${input} adalah angka genap`)
// } else if(input > 100){
//   console.log(`${input} punya nilai lebih dari 100`)
// }
// else{
//   console.log(`${input} adalah angka ganjil`)
// }

//
// let hari = "libur";

// console.log(`Sekarang hari ${hari}`);

// switch (hari) {
//   case "senin":
//     console.log("Besok adalah hari selasa");
//     break;
//   case "selasa":
//     console.log("Besok adalah hari rabu");
//     break;
//   case "rabu":
//     console.log("Besok adalah hari kamis");
//     break;
//   case "kamis":
//     console.log("Besok adalah hari jum'at");
//     break;
//   case "jum'at":
//     console.log("Besok adalah hari sabtu");
//     break;
//   case "sabtu":
//     console.log("Besok adalah hari minggu");
//     break;
//   case "minggu":
//     console.log("Besok adalah hari senin");
//     break;
//   default:
//     console.log("Bukan nama hari");
// }

// if (hari === "senin") {
//   console.log("Besok adalah hari selasa");
// } else if (hari === "selasa") {
//   console.log("Besok adalah hari rabu");
// } else if (hari === "rabu") {
//   console.log("Besok adalah hari kamis");
// } else if (hari === "kamis") {
//   console.log("Besok adalah hari jum'at");
// } else if (hari === "jum'at") {
//   console.log("Besok adalah hari sabtu");
// } else if (hari === "sabtu") {
//   console.log("Besok adalah hari minggu");
// } else if (hari === "minggu") {
//   console.log("Besok adalah hari senin");
// } else {
//   console.log("Bukan nama hari");
// }

let namaHari = [
  "senin",
  "selasa",
  "rabu",
  "kamis",
  "jum'at",
  "sabtu",
  "minggu",
];

let hariSekarang = "kamis";

for (let i = 0; i < namaHari.length; i++) {
  if (hariSekarang === namaHari[i]) {
    if (i === 6) {
      console.log(`Sekarang hari ${hariSekarang}`);
      console.log(`Besok adalah hari ${namaHari[0]}`);
    } else {
      console.log(`Sekarang hari ${hariSekarang}`);
      console.log(`Besok adalah hari ${namaHari[i + 1]}`);
    }
  }
}
