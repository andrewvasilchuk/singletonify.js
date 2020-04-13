# singletonify.js

> Create Singleton version of a class with ease

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli)

- [singletonify.js](#singletonifyjs)
  - [Installation](#installation)
    - [Via NPM](#via-npm)
    - [Via Yarn](#via-yarn)
  - [Usage](#usage)
  - [API](#api)
    - [`static singletonify(Class)`](#static-singletonifyclass)
  - [Tests](#tests)
  - [Build](#build)
  - [License](#license)

## Installation

### Via NPM

```bash
$ npm install singletonify.js
```

### Via Yarn

```bash
$ yarn add singletonify.js
```

## Usage

```ts
// ESM
import { Singletonify } from "singletonify.js";

// CommonJS
// const { Singletonify } = require("singletonify.js");

class Car {
  brand: string;

  constructor() {
    this.brand = "Mercedes";
  }
}

const SingletonifiedCar = Singletonify.singletonify(Car);
const car = SingletonifiedCar.getInstance();
console.log(car === SingletonifiedCar.getInstance()) // true
```

## API

Library exports the `Singletonify` class.

### `static singletonify(Class)`

The `Singletonify` class implements `singletonify` static method which accepts any class as an argument and returns a singletonified copy of it.

## Tests

The tests are launched by the following command:

```bash
npm run test
```

## Build

A production ready bundle is built using `npm run build` command.

After a successful build the following files will be generated in the `dist` folder:

```
├── singletonify.common.js
├── singletonify.esm.js
├── singletonify.js
```

## License

[MIT](http://opensource.org/licenses/MIT)
