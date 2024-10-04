import { expect } from "@jest/globals";
import { calc } from "../src/calc";

describe("calc", function () {
  //Негативные проверки-------------------------------------------------------------------
  it("Uncorrected value. Send 'zxc', shold return Error", function () {
    expect(() => {
      calc("zxc");
    }).toThrow();
  });

  it("Uncorrected value. Send '3(+2', shold return Error", function () {
    expect(() => {
      calc("3(+ 2");
    }).toThrow();
  });

  it("Uncorrected value. Send '3)+2', shold return Error", function () {
    expect(() => {
      calc("3)+2");
    }).toThrow();
  });

  it("Uncorrected value. Send '(3+2()', shold return Error", function () {
    expect(() => {
      calc("(3+2()");
    }).toThrow();
  });

  it("Uncorrected value. Send '3+(-2-)', shold return Error", function () {
    expect(() => {
      calc("3 + (-2-)");
    }).toThrow();
  });

  it("Uncorrected value. Send '(3+2)()', shold return Error", function () {
    expect(() => {
      calc("(3+2)()");
    }).toThrow();
  });

  it("Should solve 4,5+5=9.5", function () {
    expect(calc("4,5+5")).toBe(9.5);
  });

  it("Should solve 4.5+5=9.5", function () {
    expect(calc("4.5+5")).toBe(9.5);
  });

  it("Should solve 5 + 5=10", function () {
    expect(calc("5 + 5")).toBe(10);
  });

  // Позитивные проверки-------------------------------------------------------------------

  it("Should solve 1+2+3+4+5+6+7+8+9+0=45", function () {
    expect(calc("1+2+3+4+5+6+7+8+9+0")).toBe(45);
  });

  it("Should solve 0-0.1-0.2-0.3-0.4-0.5-0.6-0.7-0.8-0.9=-4.5", function () {
    expect(calc("0-0.1-0.2-0.3-0.4-0.5-0.6-0.7-0.8-0.9")).toBe(-4.5);
  });

  it("Should solve 3+2=5", function () {
    expect(calc("3+2")).toBe(5);
  });

  it("Should solve 3-2=1", function () {
    expect(calc("3-2")).toBe(1);
  });

  it("Should solve 3*2=6", function () {
    expect(calc("3*2")).toBe(6);
  });

  it("Should solve 10/2=5", function () {
    expect(calc("10/2")).toBe(5);
  });

  it("Should solve 10.7/2=5.35", function () {
    expect(calc("10.7/2")).toBe(5.35);
  });

  it("Should solve 10.7*2=21.4", function () {
    expect(calc("10.7*2")).toBe(21.4);
  });

  it("Should solve -3+2=-1", function () {
    expect(calc("-3+2")).toBe(-1);
  });

  it("Should solve -3+(-2)=-5", function () {
    expect(calc("-3+(-2)")).toBe(-5);
  });

  it("Should solve 5+5+5+5+5=25", function () {
    expect(calc("5+5+5+5+5")).toBe(25);
  });

  it("Should solve 40-5-5-5-5=20", function () {
    expect(calc("40-5-5-5-5")).toBe(20);
  });

  it("Should solve 5*5*5*5*5=3125", function () {
    expect(calc("5*5*5*5*5")).toBe(3125);
  });

  it("Should solve 3125/5/5/5/5=5", function () {
    expect(calc("3125/5/5/5/5")).toBe(5);
  });

  it("Should solve 4+4+2-2-3/3/5*5*5=3", function () {
    expect(calc("4+4+2-2-3/3/5*5*5")).toBe(3);
  });

  it("Should solve (5+2)=7", function () {
    expect(calc("(5+2)")).toBe(7);
  });

  it("Should solve (5+2)-1=6", function () {
    expect(calc("(5+2)-1")).toBe(6);
  });

  it("Should solve 14-(5+2)-1=7", function () {
    expect(calc("14-(5+2)")).toBe(7);
  });

  it("Should solve 14-((5+3)-1)=7", function () {
    expect(calc("14-((5+3)-1)")).toBe(7);
  });

  it("Should solve 14-(5+(5-3))=7", function () {
    expect(calc("14-(5+(5-3))")).toBe(7);
  });

  it("Should solve ((5+3)-5)+4= 7", function () {
    expect(calc("((5+3)-5)+4")).toBe(7);
  });

  it("Should solve (5+(5-3)) = 7", function () {
    expect(calc("(10-(5+3))+5")).toBe(7);
  });

  it("Should solve (5+2)/(5+2)=1", function () {
    expect(calc("(5+2)/(5+2)")).toBe(1);
  });

  it("Should solve ((5+2)/(5+2)*(5-2)*(5-2))+1=10", function () {
    expect(calc("((5+2)/(5+2)*(5-2)*(5-2))+1")).toBe(10);
  });

  it("Should solve 10-((5+2)/(5+2)*(5-2)*(5-2))=1", function () {
    expect(calc("10-((5+2)/(5+2)*(5-2)*(5-2))")).toBe(1);
  });

  it("Should solve -24812275.83587205", function () {
    expect(
      calc("3636+4848*3626-7447/2626+(2526-4777*(3626+4663))-2773*(3737-2727)")
    ).toBe(-24812275.83587205);
  });
});
