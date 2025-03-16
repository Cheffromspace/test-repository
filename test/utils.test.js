import { sum, multiply } from '../src/utils.js';

describe('Utils', () => {
  describe('input validation', () => {
    test('throws error for non-number inputs in sum', () => {
      expect(() => sum('2', 3)).toThrow(TypeError);
      expect(() => sum(2, '3')).toThrow(TypeError);
      expect(() => sum(null, 3)).toThrow(TypeError);
      expect(() => sum(undefined, 3)).toThrow(TypeError);
    });
    
    test('throws error for non-number inputs in multiply', () => {
      expect(() => multiply('2', 3)).toThrow(TypeError);
      expect(() => multiply(2, '3')).toThrow(TypeError);
      expect(() => multiply(null, 3)).toThrow(TypeError);
      expect(() => multiply(undefined, 3)).toThrow(TypeError);
    });
  });

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