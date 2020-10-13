class Human {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  introduce() {
    console.log(`hi, my name is ${this.name}`);
  }

  work() {
    console.log("work");
  }
}

class Programmer extends Human {
  constructor(name, address, programmingLanguage) {
    super(name, address);
    this.programmingLanguage = programmingLanguage;
  }

  introduce() {
    super.introduce();
    console.log(
      `i can write a programming using these languages`,
      this.programmingLanguage
    );
  }

  code() {
    console.log(
      "Code some",
      this.programmingLanguage[
        Math.floor(Math.random() * this.programmingLanguage.length)
      ]
    );
  }
}


const Joni = new Programmer("Joni", "Ponorogo", ["python", "java", "ruby"]);

Joni.code()