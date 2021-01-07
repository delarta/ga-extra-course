class Person {
  constructor({ firstName, lastName, job }) {
    // const { firstName, lastName, job } = data;
    this.firstNames = firstName;
    this.lastName = lastName;
    this.job = job;
    this.skills = [];
    // Person._amount = undefined
    Person._amount = Person._amount || 0;
    Person._amount++;
  }

  static get amount() {
    // Person._amount = Person._amount || 0;
    return Person._amount;
  }

  get fullInfo() {
    return `Name: ${this.firstNames} ${this.lastName} \nJob: ${this.job.position}`;
  }

  get fullName() {
    return `${this.firstNames} ${this.lastName}`;
  }

  set fullName(fN) {
    if (/[A-Za-z]\s[A-Za-z]/.test(fN)) {
      [this.firstNames, this.lastName] = fN.split(" ");
    } else {
      throw Error("Bad fullname");
    }
  }

  learn(skill) {
    return this.skills.push(skill);
  }
}

class Job {
  constructor(company, position, salary) {
    this.company = company;
    this.position = position;
    this.salary = salary;
  }
}

const personData = {
  firstName: "John",
  lastName: "Doe",
  job: new Job("Youtube", "developer", 200000),
};

const john = new Person(personData);

john._amount = 100


john.fullName = "Shinpachi Shimura"
console.log(john.fullInfo); // john doe ?
console.log("Person Amount: ",Person.amount);

const roger = new Person({
  firstName: "Roger",
  lastName: "Federer",
  job: new Job("ATP", "tennis", 1000000),
});

console.log(roger.fullInfo); // john doe ?
console.log("Person Amount: ",Person.amount);


const jotaro = new Person({
  firstName: "Jotaro",
  lastName: "Kujo",
  job: new Job("Tokped", "Software Architecture", 2000000),
});

console.log(jotaro.fullInfo); // john doe ?


// const josuke = new Person({
//   firstName: "Josuke",
//   lastName: "Higshikata",
//   job: new Job("Tokped", "Software Architecture", 2000000),
// });

// console.log(josuke.fullInfo); // john doe ?



console.log("Person Amount: ",Person.amount);





// console.log(john.firstNames) //output: John
// console.log(john.lastName) //output: Doe
// console.log(john.fullName)
// john.fullName = 'Mike Smith';
// console.log(john.fullName) //output: Mike Smith
// console.log(john.firstNames) //output: Mike
// console.log(john.lastName) //output: Smith

// john.learn('es6');
// john.learn('es7');
// john.learn('es2015');
// console.log(john.skills) //output: ["es6","es7"]

// roger.learn('programming');
// console.log(roger.skills) //output: ["programming"]

// console.log("Person amount",Person.amount)
