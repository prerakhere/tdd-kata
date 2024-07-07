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

  describe('addition of indefinite numbers in the string', () => {
    it('should add any number of numbers in the string', () => {
      expect(add("1,2,3,4")).toBe(10);
    });

    it('should handle edge cases', () => {
      expect(add(",")).toBe(0);
      expect(add("1,,2,")).toBe(3);
    });
  });

  describe('handling newline character', () => {
    it('should add numbers in the string treating newline also as a delimiter', () => {
      expect(add("1,2\n3,4")).toBe(10);
    });

    it('should handle edge cases', () => {
      expect(add("\n")).toBe(0);
      expect(add("\n,\n,,")).toBe(0);
    });
  });

});