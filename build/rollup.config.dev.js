import path from "path";
import typescript from "rollup-plugin-typescript2";
import replace from "rollup-plugin-replace";

import plugins from "./base/plugins/index";

const DEMO_DIR = path.join(__dirname, "../demo");

/** @type {import('rollup').RollupOptions} */
export default {
  input: path.join(DEMO_DIR, "index.ts"),
  output: {
    file: path.join(DEMO_DIR, "demo.js"),
    format: "cjs",
    name: "demo",
    sourcemap: true,
  },
  plugins: [
    typescript(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
  ].concat(plugins),
};
