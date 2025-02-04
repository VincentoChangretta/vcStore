import { classNames } from "./classNames";

describe("classnames", () => {
  test("Правильные тесты", () => {
    expect(classNames("class")).toBe("class");
  });
  test("Правильные тесты", () => {
    expect(
      classNames("class1", { black: true, white: false }, ["class2", "class3"])
    ).toEqual("class1 class2 class3 black");
  });
  test("Правильные тесты", () => {
    expect(
      classNames("class1", { black: true, white: true }, ["class2", "class3"])
    ).toEqual("class1 class2 class3 black white");
  });
  test("Правильные тесты", () => {
    expect(classNames("", { black: false }, [])).toEqual("");
  });
  test("Правильные тесты", () => {
    expect(classNames("", { black: true }, [])).not.toEqual("");
  });
  test("Правильные тесты", () => {
    expect(classNames("", {}, [])).not.toBeNull();
  });
  test("Правильные тесты", () => {
    expect(classNames("", {}, [])).not.toBeUndefined();
  });
});
