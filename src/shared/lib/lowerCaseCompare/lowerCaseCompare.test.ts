import { lowerCaseCompare } from "./lowerCaseCompare";

describe("Тесты", () => {
  test("Правильный", () => {
    expect(lowerCaseCompare("aram", "aram")).toBe(true);
  });
  test("Правильный", () => {
    expect(lowerCaseCompare("Aram", "aram")).toBe(true);
  });
  test("Правильный", () => {
    expect(lowerCaseCompare("aram", "Aram")).toBe(true);
  });
  test("Правильный", () => {
    expect(lowerCaseCompare("aram", "aram")).toBe(true);
  });
  test("Правильный", () => {
    expect(lowerCaseCompare("", "")).toBe(true);
  });
  test("Правильный", () => {
    expect(lowerCaseCompare("1", "1")).toBe(true);
  });
  test("Неправильный", () => {
    expect(lowerCaseCompare("", "aram")).toBe(false);
  });
  test("Неправильный", () => {
    expect(lowerCaseCompare("artak", "aram")).toBe(false);
  });
});
