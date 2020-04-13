import { GenericSingleton } from "./GenericSingleton";

export class SingletonFactory {
  createSingleton<C extends { new (...args: any[]): any }>(Class: C) {
    return GenericSingleton.createSingleton(Class);
  }
}
