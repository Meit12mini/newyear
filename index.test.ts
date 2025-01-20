import { sum, multiplay, isEven } from "./index";
import { describe, test, expect } from "@jest/globals";
describe("Sum function", () => {
  test("Returns correct value", () => {
    expect(sum(2, 3)).toEqual(5);
  });
});
describe("Sum function", () => {
  test("Returns correct value", () => {
    expect(multiplay(2, 3)).toEqual(6);
  });
});

  describe("Sum function", () => {
    test("Returns correct value", () => {
      expect(isEven(23)).toEqual(false);
    });
  });