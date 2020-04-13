import { SingletonFactory } from "./factory";

const factory = new SingletonFactory();

export class Singletonify {
  static singletonify<C extends { new (...args: any[]): any }>(Class: C) {
    return factory.createSingleton(Class);
  }
}
