import path from "path";
import typescript from "rollup-plugin-typescript2";
import replace from "rollup-plugin-replace";

import basePlugins from "./base/plugins/index";

const SOURCE = path.join(__dirname, "../src/index.ts");
const DIST_DIR = "dist";
const FILE_NAME = "singletonify";
const name = "Singletonify";

const plugins = [
  replace({
    "process.env.NODE_ENV": JSON.stringify("production"),
  }),
].concat(basePlugins);

/** @type {import('rollup').RollupOptions} */
export default [
  {
    input: SOURCE,
    output: [
      {
        file: `${DIST_DIR}/${FILE_NAME}.js`,
        format: "umd",
        exports: "named",
        name,
      },
      {
        file: `${DIST_DIR}/${FILE_NAME}.common.js`,
        exports: "named",
        format: "cjs",
      },
      {
        file: `${DIST_DIR}/${FILE_NAME}.esm.js`,
        format: "esm",
      },
    ],
    plugins: [
      typescript({
        tsconfig: "./tsconfig.prod.json",
      }),
    ].concat(plugins),
  },
];
