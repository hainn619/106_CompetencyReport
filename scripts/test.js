// object constructor
function Dog(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
}

class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

function runTest() {
  console.log("runing test");

  let dog1 = { name: "fido", age: 3 };
  let dog2 = new Dog("hai", 2);

  // creating objects

  //Classs
  let cat1 = new Cat("luma", 1);
}
