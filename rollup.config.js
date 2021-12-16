import { babel } from "@rollup/plugin-babel";
import filesize from "rollup-plugin-filesize";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
const packageJson = require("./package.json");

const config = {
  input: "./src/index.tsx",
  output: {
    file: packageJson.module,
    format: "esm",
    sourcemap: true,
  },
  external: [/@babel\/runtime/, "react"],
  plugins: [
    babel({
      babelHelpers: "runtime",
      plugins: ["@babel/plugin-transform-runtime"],
    }),
    filesize(),
    peerDepsExternal(),
    resolve(),
    typescript({ useTsconfigDeclarationDir: true }),
  ],
};

export default config;
