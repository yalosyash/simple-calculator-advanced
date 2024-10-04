import { expect } from "@jest/globals";
import { calc } from "../src/calc";

describe("calc", function () {
  //Негативные проверки-------------------------------------------------------------------
  it("should return Error", function () {
    expect(() => {
      calc("zxc");
    }).toThrow();
  });
  it("should return Error", function () {
    expect(() => {
      calc("4 ( + 42");
    }).toThrow();
  });
  it("should return Error", function () {
    expect(() => {
      calc("4 ) + 42");
    }).toThrow();
  });
  it("should return Error", function () {
    expect(() => {
      calc("(4 + 42( )");
    }).toThrow();
  });
  it("should return Error", function () {
    expect(() => {
      calc("3 + ( - 2 - )");
    }).toThrow();
  });
  it("should return Error", function () {
    expect(() => {
      calc("(3+2)()");
    }).toThrow();
  });

  // Позитивные проверки-------------------------------------------------------------------
  it("should return 5", function () {
    expect(calc("3+2")).toBe(5);
  });
  it("should return -24812275.83587205", function () {
    expect(
      calc("3636+4848*3626-7447/2626+(2526-4777*(3626+4663))-2773*(3737-2727)")
    ).toBe(-24812275.83587205);
  });

  it("should return -1", function () {
    expect(calc("-3+2")).toBe(-1);
  });
  it("should return 9", function () {
    expect(calc("(5 + (3+2)) - 1")).toBe(9);
  });
  it("should return 9", function () {
    expect(calc("3.2+2,1")).toBe(5.300000000000001);
  });
});
