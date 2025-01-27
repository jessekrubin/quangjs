/* eslint-disable no-console */
import process from "node:process";
import { __VERSION__ } from "./_version.js";

function isDebug() {
  const _debugEnvStr = (process.env["DEBUG"] ?? "false").toLowerCase();
  return ["true", "1", "t", "y", "yes"].includes(_debugEnvStr);
}

function isTest() {
  return process.env["NODE_ENV"] === "test";
}

// eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-explicit-any
function noop(..._args: any[]) {}

/* v8 ignore start */
const debug = isDebug()
  ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (...args: any[]) => console.log(...args)
  : noop;
const echo = isTest() ? noop : console.log;
/* v8 ignore stop */

export async function cli(args?: string[]) {
  const argv = args || [];
  if (debug) {
    debug("Debugging enabled");
  }
  if (argv.includes("--help") || argv.includes("-h")) {
    echo("Usage: quangjs");
    return;
  }
  if (argv.includes("--version") || argv.includes("-v")) {
    echo(`quangjs v${__VERSION__}`);
    return;
  }

  echo("quang!");
}

/* v8 ignore start */
async function main(args?: string[]) {
  const argv = args || process.argv.slice(2);
  await cli(argv);
}

if (process.env["NODE_ENV"] !== "test") {
  main()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(() => {
      process.exit(0);
    });
}
/* v8 ignore stop */
