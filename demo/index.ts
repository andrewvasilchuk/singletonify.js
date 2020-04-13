import { Singletonify } from "../src";

class Car {
  public brand: string;

  constructor() {
    this.brand = "Ford";
  }
}

class Person {
  constructor(public name: string, public age: number) {}

  greet() {
    return `Hello, my name is ${this.greet} and I am ${this.age} years old.`;
  }
}

const SingletonifiedCar = Singletonify.singletonify(Car);
const car = SingletonifiedCar.getInstance();
console.log(car);
console.log(
  `Pointers point to the same instance: ${
    car === SingletonifiedCar.getInstance()
  }`
);

const name = "Andrew";
const age = 22;
const SingletonifiedPerson = Singletonify.singletonify(Person);
const person = SingletonifiedPerson.getInstance(name, age);
console.log(person);
console.log(
  `Pointers point to the same instance: ${
    person === SingletonifiedPerson.getInstance(name, age)
  }`
);
