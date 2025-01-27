import { describe, expect, test } from "vitest";
import * as quang from "../quangjs.js";

describe("tests", () => {
  test("test", async () => {
    expect(quang).toBeDefined();
    expect(quang).toMatchSnapshot();
  });
});
