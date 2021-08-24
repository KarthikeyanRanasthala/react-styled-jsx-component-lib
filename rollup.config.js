import { defineConfig } from "rollup";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import postcss from 'rollup-plugin-postcss'

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
  external: ["react", "styled-jsx/style", /@babel\/runtime/],
});
