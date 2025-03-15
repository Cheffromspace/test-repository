import { sum, multiply } from '../src/utils.js';

describe('Utils', () => {
  describe('sum', () => {
    test('adds two positive numbers correctly', () => {
      expect(sum(2, 3)).toBe(5);
    });

    test('handles negative numbers', () => {
      expect(sum(-1, -2)).toBe(-3);
      expect(sum(5, -2)).toBe(3);
    });

    test('handles zero', () => {
      expect(sum(0, 5)).toBe(5);
      expect(sum(5, 0)).toBe(5);
    });
  });

  describe('multiply', () => {
    test('multiplies two positive numbers correctly', () => {
      expect(multiply(2, 3)).toBe(6);
    });

    test('handles negative numbers', () => {
      expect(multiply(-1, -2)).toBe(2);
      expect(multiply(5, -2)).toBe(-10);
    });

    test('handles zero', () => {
      expect(multiply(0, 5)).toBe(0);
      expect(multiply(5, 0)).toBe(0);
    });
  });
});