
var hello = "Hello";
var b = "Hi";

console.log(this)

function sayHello(){
  console.log(this.hello)
}

sayHello()