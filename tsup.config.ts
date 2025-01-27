import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/fetty-wap-const.ts", "src/cli.ts"],
  splitting: false,
  treeshake: false,
  format: ["cjs", "esm"],
  dts: false,
  outDir: "dist",
  clean: true,
  tsconfig: "./tsconfig.json",
  cjsInterop: true,
});
