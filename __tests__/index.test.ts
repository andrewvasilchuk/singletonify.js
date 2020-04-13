import { Singletonify } from "../src";

describe("Singletonify", () => {
  test("should instantiate class instance only once", () => {
    const car = new Car();
    const SingletonifiedCar = Singletonify.singletonify(Car);
    expect(car === SingletonifiedCar.getInstance()).toBe(false);
    expect(
      SingletonifiedCar.getInstance() === SingletonifiedCar.getInstance()
    ).toBe(true);
  });

  test("should throw when instantiated using new keyword", () => {
    const SingletonifiedCar = Singletonify.singletonify(Car);
    expect(() => new SingletonifiedCar()).toThrow();
  });

  test("should pass constructor arguments to the singletonified class", () => {
    const name = "Andrew";
    const age = 22;
    const SingletonifiedPerson = Singletonify.singletonify(Person);
    const person = SingletonifiedPerson.getInstance(name, age);
    expect(person.age).toEqual(age);
    expect(person.name).toEqual(name);
  });
});

class Car {
  brand: string;

  constructor() {
    this.brand = "Mercedes";
  }
}

class Person {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    this._name = val;
  }

  get age() {
    return this._age;
  }

  set age(val) {
    this._age = val;
  }

  greet() {
    return `Hello, my name is ${this.greet} and I am ${this.age} years old.`;
  }
}
