import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";

import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.browser,
      format: "umd",
      name: pkg.name,
    },
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module.default,
      format: "es",
    },
  ],
  plugins: [
    babel({ babelHelpers: "bundled", plugins: ['transform-class-properties'], }),
    terser(),
    typescript({ tsconfig: "./tsconfig.json" }),
  ],
};
