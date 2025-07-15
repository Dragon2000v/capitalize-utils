import { describe, it, expect } from 'vitest';
import { isLetter, isValidString } from '../utils';
import {
  ENGLISH_TEST_DATA,
  UKRAINIAN_TEST_DATA,
  RUSSIAN_TEST_DATA,
  EDGE_CASES,
} from './__mocks__/testData';

describe('isLetter', () => {
  describe('Latin alphabet', () => {
    it('should return true for lowercase Latin letters', () => {
      'abcdefghijklmnopqrstuvwxyz'.split('').forEach(char => {
        expect(isLetter(char)).toBe(true);
      });
    });

    it('should return true for uppercase Latin letters', () => {
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(char => {
        expect(isLetter(char)).toBe(true);
      });
    });
  });

  describe('Cyrillic alphabet', () => {
    it('should return true for lowercase Cyrillic letters', () => {
      'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'.split('').forEach(char => {
        expect(isLetter(char)).toBe(true);
      });
    });

    it('should return true for uppercase Cyrillic letters', () => {
      'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'.split('').forEach(char => {
        expect(isLetter(char)).toBe(true);
      });
    });
  });

  describe('Ukrainian alphabet', () => {
    it('should return true for Ukrainian specific letters', () => {
      'ґєїі'.split('').forEach(char => {
        expect(isLetter(char)).toBe(true);
      });
    });

    it('should return true for uppercase Ukrainian specific letters', () => {
      'ҐЄЇІ'.split('').forEach(char => {
        expect(isLetter(char)).toBe(true);
      });
    });
  });

  describe('Non-letter characters', () => {
    it('should return false for numbers', () => {
      '0123456789'.split('').forEach(char => {
        expect(isLetter(char)).toBe(false);
      });
    });

    it('should return false for punctuation', () => {
      '.,!?;:()[]{}"\'-_=+@#$%^&*~`|\\/<>'.split('').forEach(char => {
        expect(isLetter(char)).toBe(false);
      });
    });

    it('should return false for whitespace', () => {
      EDGE_CASES.whitespace.forEach(char => {
        expect(isLetter(char)).toBe(false);
      });
    });

    it('should return false for special characters', () => {
      [
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        '-',
        '_',
        '=',
        '+',
        '[',
        ']',
        '{',
        '}',
        '|',
        '\\',
        ':',
        ';',
        '"',
        "'",
        '<',
        '>',
        ',',
        '.',
        '?',
        '/',
      ].forEach(char => {
        expect(isLetter(char)).toBe(false);
      });
    });
  });

  describe('Edge cases', () => {
    it('should handle empty string', () => {
      expect(isLetter('')).toBe(false);
    });

    it('should handle unicode characters', () => {
      EDGE_CASES.unicode.forEach(word => {
        const firstChar = word.charAt(0);
        expect(isLetter(firstChar)).toBe(true);
      });
    });

    it('should handle emojis', () => {
      ['😀', '🌍', '🚀', '❤️', '👍'].forEach(emoji => {
        expect(isLetter(emoji)).toBe(false);
      });
    });

    it('should handle HTML entities', () => {
      ['&', '<', '>', '"', "'"].forEach(char => {
        expect(isLetter(char)).toBe(false);
      });
    });
  });
});

describe('isValidString', () => {
  describe('Valid strings', () => {
    it('should return true for non-empty strings', () => {
      const validStrings = [
        'hello',
        'привіт',
        'привет',
        '123',
        '!@#$%',
        ' ',
        '\t',
        '\n',
      ];

      validStrings.forEach(str => {
        expect(isValidString(str)).toBe(true);
      });
    });

    it('should return true for long strings', () => {
      EDGE_CASES.veryLongWords.forEach(word => {
        expect(isValidString(word)).toBe(true);
      });
    });

    it('should return true for strings with special characters', () => {
      EDGE_CASES.unicode.forEach(word => {
        expect(isValidString(word)).toBe(true);
      });
    });
  });

  describe('Invalid inputs', () => {
    it('should return false for null', () => {
      expect(isValidString(null)).toBe(false);
    });

    it('should return false for undefined', () => {
      expect(isValidString(undefined)).toBe(false);
    });

    it('should return false for empty string', () => {
      expect(isValidString('')).toBe(false);
    });

    it('should return false for numbers', () => {
      expect(isValidString(123)).toBe(false);
      expect(isValidString(0)).toBe(false);
      expect(isValidString(-1)).toBe(false);
      expect(isValidString(3.14)).toBe(false);
    });

    it('should return false for booleans', () => {
      expect(isValidString(true)).toBe(false);
      expect(isValidString(false)).toBe(false);
    });

    it('should return false for objects', () => {
      expect(isValidString({})).toBe(false);
      expect(isValidString({ key: 'value' })).toBe(false);
      expect(isValidString([])).toBe(false);
      expect(isValidString([1, 2, 3])).toBe(false);
    });

    it('should return false for functions', () => {
      expect(isValidString(() => {})).toBe(false);
      expect(isValidString(function () {})).toBe(false);
    });

    it('should return false for symbols', () => {
      expect(isValidString(Symbol('test'))).toBe(false);
    });
  });

  describe('Type guard behavior', () => {
    it('should narrow type when used in conditional', () => {
      const input: unknown = 'hello world';

      if (isValidString(input)) {
        // TypeScript should know input is string here
        expect(typeof input).toBe('string');
        expect(input.length).toBeGreaterThan(0);
      } else {
        expect(true).toBe(false); // Should not reach here
      }
    });

    it('should work with arrays of unknown values', () => {
      const inputs: unknown[] = [
        'hello',
        '',
        null,
        undefined,
        123,
        true,
        { key: 'value' },
      ];

      const validStrings = inputs.filter(isValidString);
      expect(validStrings).toEqual(['hello']);
      expect(validStrings.every(str => typeof str === 'string')).toBe(true);
    });
  });

  describe('Edge cases', () => {
    it('should handle string objects', () => {
      expect(isValidString(new String('hello'))).toBe(false);
    });

    it('should handle very long strings', () => {
      const longString = 'a'.repeat(10000);
      expect(isValidString(longString)).toBe(true);
    });

    it('should handle strings with only whitespace', () => {
      expect(isValidString('   ')).toBe(true);
      expect(isValidString('\t\n\r')).toBe(true);
    });

    it('should handle strings with null bytes', () => {
      expect(isValidString('hello\u0000world')).toBe(true);
    });

    it('should handle strings with control characters', () => {
      expect(isValidString('hello\x00world')).toBe(true);
      expect(isValidString('hello\x1Fworld')).toBe(true);
    });
  });
});
