// Michael jackson
// noskcaj leahcim

function reverseMyName(str) {
  // put your code here

  // for(let i = 0; i < str.length; i++){
  //   console.log(str[i])
  // }

  let newStr = "";

  for (let i = str.length - 1; i >= 0; i--) {

    newStr = newStr + str[i];
    
    // newStr = newStr + str[6]; "" + "a", newStr = "a"
    // newStr = newStr + str[5]; "a" + "t", newStr = "at"
    // newStr = newStr + str[4]; "at" + "r", newStr = "atr"
    // newStr = newStr + str[3]; "atr" + "a", newStr = "atra"
    // newStr = newStr + str[2]; "atra" + "l", newStr = "atral"
    // newStr = newStr + str[1]; "atral" + "e", newStr = "atrale"
    // newStr = newStr + str[0]; "atrale" + "d", newStr = "atraled"
  }

  // a 6
  // t 5
  // r 4
  // a 3
  // l 2
  // e 1
  // D 0

  return newStr;
}

// reverseMyName("Michael Jackson");

const Test = (fun, result) => console.log(reverseMyName(fun) === result);

Test("A", "A");
Test("Michael Jackson", "noskcaJ leahciM");
Test("Alvian Zachry Faturrahman", "namharrutaF yrhcaZ naivlA");
Test("", "");
