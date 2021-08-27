import { defineConfig } from "rollup";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import postcss from 'rollup-plugin-postcss'
import pkg from './package.json';

const deps = Object.keys(pkg.peerDependencies);

import { DEFAULT_EXTENSIONS } from "@babel/core";

export default defineConfig({
  input: "src/index.ts",
  output: {
    format: "es",
    dir: "dist",
  },
  plugins: [
    postcss(),
    typescript(),
    babel({
      babelHelpers: "runtime",
      extensions: [...DEFAULT_EXTENSIONS, "ts", "tsx"],
    }),
  ],
  external: id => deps.some(dep => id === dep || id.startsWith(`${dep}/`)),
});
