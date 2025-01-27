import process from "node:process";
import { describe, test } from "vitest";

import { cli } from "../cli.js";

describe("cli", () => {
  test("cli", async () => {
    await cli(["--help"]);
    await cli(["--version"]);
    await cli([]);
    await cli();
  });

  test("debug cli", async () => {
    await cli(["--debug"]);

    const envOg = { ...process.env };
    for (const envvars of [{ DEBUG: "true" }, { DEBUG: "f" }, { DEBUG: "0" }]) {
      // assign env vars
      const env = { ...envOg, ...envvars };
      Object.assign(process.env, env);

      await cli([]);
      // clea env vars
      for (const key of Object.keys(envvars)) {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete process.env[key];
      }
      Object.assign(process.env, envOg);
    }
  });
});
