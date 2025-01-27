import { defaultExclude, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: false,
    coverage: {
      provider: "v8",
      include: ["src/**/*.ts"],
    },
    exclude: [...defaultExclude, "_fixtures/**", "fixtures/**"],
  },
});
