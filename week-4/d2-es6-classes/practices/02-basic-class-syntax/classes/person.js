// Your code here

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  };

  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
  };

  static introducePeople(array) {
    if (!Array.isArray(array)) {
      console.log(`introducePeople only takes an array as an argument.`);
    } else if (array.some(el => !(el instanceof Person))) {
      console.log(`All items in array must be Person class instances.`);
    } else {
      array.forEach(el => el.introduce());
    }
  };
}

// const daniel = new Person(
//   'Daniel',
//   'Hoffmann',
//   31
// );

// daniel.introduce();

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
