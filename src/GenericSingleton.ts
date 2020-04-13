export class GenericSingleton {
  // need to declare the type explicitly to overcome this error https://github.com/microsoft/TypeScript/issues/30355
  static createSingleton<C extends { new (...args: any[]): any }>(
    Class: C
  ): C & {
    getInstance: (...args: ConstructorParameters<C>) => InstanceType<C>;
  } {
    const key = Symbol();

    return class Singleton extends Class {
      private static [key]?: InstanceType<C>;

      constructor(...args: any[]) {
        super();
        throw new Error(
          "Instantiation failed: use getInstance() method instead of new keyword"
        );
      }

      static getInstance(...args: ConstructorParameters<C>) {
        if (Singleton[key] === void 0) {
          Singleton[key] = new Class(...args);
        }

        return Singleton[key];
      }
    };
  }
}
