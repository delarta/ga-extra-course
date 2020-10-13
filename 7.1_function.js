function sayHello() {
  console.log("hello!");
}

// sayHello();

function saySomething(input) {
  console.log(input);
}

// Passing
// saySomething("Sate ponorogo enak rasanya")

function introduction(nama) {
  let intro = `Perkenalkan nama saya ${nama}`;
  return intro;
}

let result = introduction("Johnny");

// console.log(result)

function multiply(num1, num2) {
  return num1 * num2;
}

function sum(num1, num2) {
  return num1 + num2;
}

let calc = 5 + 4 * 3 + 5 + 6;
// console.log(calc, "calc")

let calcFunc = 5 + multiply(4,3) + sum(5, 6);
// console.log(calcFunc, "calcFunc")

