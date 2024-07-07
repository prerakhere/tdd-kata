import add from "./stringCalculator";

describe('string calculator', () => {

  it('should return the sum as 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  describe('addition of two numbers', () => {
    it('should add two numbers in the string', () => {
      expect(add("1,2")).toBe(3);
    });
  });

});