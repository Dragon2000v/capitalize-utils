import { describe, it, expect } from 'vitest';
import { uncapitalize, uncapitalizeSentence } from '../uncapitalize';
import {
  ENGLISH_TEST_DATA,
  UKRAINIAN_TEST_DATA,
  RUSSIAN_TEST_DATA,
  EDGE_CASES,
  EXPECTED_RESULTS,
} from './__mocks__/testData';

describe('uncapitalize', () => {
  describe('English words', () => {
    it('should uncapitalize first letter of capitalized words', () => {
      ENGLISH_TEST_DATA.words.mixed.forEach(word => {
        const result = uncapitalize(word);
        expect(result).toBe(word.charAt(0).toLowerCase() + word.slice(1));
      });
    });

    it('should preserve already lowercase words', () => {
      ENGLISH_TEST_DATA.words.lowercase.forEach(word => {
        const result = uncapitalize(word);
        expect(result).toBe(word);
      });
    });

    it('should handle uppercase words', () => {
      ENGLISH_TEST_DATA.words.uppercase.forEach(word => {
        const result = uncapitalize(word);
        expect(result).toBe(word.charAt(0).toLowerCase() + word.slice(1));
      });
    });
  });

  describe('Ukrainian words', () => {
    it('should uncapitalize Ukrainian words', () => {
      UKRAINIAN_TEST_DATA.words.mixed.forEach(word => {
        const result = uncapitalize(word);
        expect(result).toBe(word.charAt(0).toLowerCase() + word.slice(1));
      });
    });

    it('should handle Ukrainian special characters', () => {
      UKRAINIAN_TEST_DATA.words.withSpecialChars.forEach(word => {
        const result = uncapitalize(word);
        expect(result).toBe(word.charAt(0).toLowerCase() + word.slice(1));
      });
    });

    it('should preserve lowercase Ukrainian words', () => {
      UKRAINIAN_TEST_DATA.words.lowercase.forEach(word => {
        const result = uncapitalize(word);
        expect(result).toBe(word);
      });
    });
  });

  describe('Russian words', () => {
    it('should uncapitalize Russian words', () => {
      RUSSIAN_TEST_DATA.words.mixed.forEach(word => {
        const result = uncapitalize(word);
        expect(result).toBe(word.charAt(0).toLowerCase() + word.slice(1));
      });
    });

    it('should handle Russian special characters', () => {
      RUSSIAN_TEST_DATA.words.withSpecialChars.forEach(word => {
        const result = uncapitalize(word);
        expect(result).toBe(word.charAt(0).toLowerCase() + word.slice(1));
      });
    });

    it('should preserve lowercase Russian words', () => {
      RUSSIAN_TEST_DATA.words.lowercase.forEach(word => {
        const result = uncapitalize(word);
        expect(result).toBe(word);
      });
    });
  });

  describe('Edge cases', () => {
    it('should handle words with numbers', () => {
      ENGLISH_TEST_DATA.words.withNumbers.forEach(word => {
        const result = uncapitalize(word);
        if (/^[a-zA-Z]/.test(word)) {
          expect(result).toBe(word.charAt(0).toLowerCase() + word.slice(1));
        } else {
          expect(result).toBe(word);
        }
      });
    });

    it('should handle words with symbols', () => {
      ENGLISH_TEST_DATA.words.withSymbols.forEach(word => {
        const result = uncapitalize(word);
        if (/^[a-zA-Z]/.test(word)) {
          expect(result).toBe(word.charAt(0).toLowerCase() + word.slice(1));
        } else {
          expect(result).toBe(word);
        }
      });
    });

    it('should handle empty strings and invalid input', () => {
      ENGLISH_TEST_DATA.words.empty.forEach(input => {
        const result = uncapitalize(input);
        expect(result).toBe(input);
      });

      expect(uncapitalize(null as any)).toBe(null);
      expect(uncapitalize(undefined as any)).toBe(undefined);
      expect(uncapitalize(123 as any)).toBe(123);
    });

    it('should handle single characters', () => {
      EDGE_CASES.singleCharacters.forEach(char => {
        const result = uncapitalize(char);
        if (/[a-zA-Zа-яё]/i.test(char)) {
          expect(result).toBe(char.toLowerCase());
        } else {
          expect(result).toBe(char);
        }
      });
    });

    it('should handle very long words', () => {
      EDGE_CASES.veryLongWords.forEach(word => {
        const result = uncapitalize(word);
        expect(result).toBe(word.charAt(0).toLowerCase() + word.slice(1));
      });
    });

    it('should handle unicode characters', () => {
      EDGE_CASES.unicode.forEach(word => {
        const result = uncapitalize(word);
        expect(result).toBe(word.charAt(0).toLowerCase() + word.slice(1));
      });
    });

    it('should handle emojis', () => {
      EDGE_CASES.emojis.forEach(word => {
        const result = uncapitalize(word);
        expect(result).toBe(word.charAt(0).toLowerCase() + word.slice(1));
      });
    });

    it('should handle mixed case words', () => {
      const mixedWords = ['HeLLo', 'WoRLd', 'JaVaScRiPt'];
      mixedWords.forEach(word => {
        const result = uncapitalize(word);
        expect(result).toBe(word.charAt(0).toLowerCase() + word.slice(1));
      });
    });
  });

  describe('Expected results validation', () => {
    Object.entries(EXPECTED_RESULTS.uncapitalize).forEach(
      ([input, expected]) => {
        it(`should handle "${input}" correctly`, () => {
          expect(uncapitalize(input)).toBe(expected);
        });
      }
    );
  });
});

describe('uncapitalizeSentence', () => {
  describe('English sentences', () => {
    it('should uncapitalize first word in simple sentences', () => {
      ENGLISH_TEST_DATA.sentences.simple.forEach(sentence => {
        const result = uncapitalizeSentence(sentence);
        const expected = sentence.charAt(0).toLowerCase() + sentence.slice(1);
        expect(result).toBe(expected);
      });
    });

    it('should handle sentences with punctuation', () => {
      ENGLISH_TEST_DATA.sentences.withPunctuation.forEach(sentence => {
        const result = uncapitalizeSentence(sentence);
        const expected = sentence.charAt(0).toLowerCase() + sentence.slice(1);
        expect(result).toBe(expected);
      });
    });
  });

  describe('Multilingual sentences', () => {
    it('should handle Ukrainian sentences', () => {
      UKRAINIAN_TEST_DATA.sentences.simple.forEach(sentence => {
        const result = uncapitalizeSentence(sentence);
        const expected = sentence.charAt(0).toLowerCase() + sentence.slice(1);
        expect(result).toBe(expected);
      });
    });

    it('should handle Russian sentences', () => {
      RUSSIAN_TEST_DATA.sentences.simple.forEach(sentence => {
        const result = uncapitalizeSentence(sentence);
        const expected = sentence.charAt(0).toLowerCase() + sentence.slice(1);
        expect(result).toBe(expected);
      });
    });
  });

  describe('Edge cases', () => {
    it('should handle whitespace correctly', () => {
      expect(uncapitalizeSentence('  Hello world  ')).toBe('hello world');
      expect(uncapitalizeSentence('\t\nHello world\t\n')).toBe('hello world');
    });

    it('should handle empty strings', () => {
      ENGLISH_TEST_DATA.sentences.empty.forEach(input => {
        const result = uncapitalizeSentence(input);
        expect(result).toBe('');
      });
    });

    it('should handle already lowercase sentences', () => {
      expect(uncapitalizeSentence('hello world')).toBe('hello world');
      expect(uncapitalizeSentence('привіт світ')).toBe('привіт світ');
    });

    it('should handle invalid input', () => {
      expect(uncapitalizeSentence(null as any)).toBe(null);
      expect(uncapitalizeSentence(undefined as any)).toBe(undefined);
      expect(uncapitalizeSentence(123 as any)).toBe(123);
    });

    it('should handle single word sentences', () => {
      expect(uncapitalizeSentence('Hello')).toBe('hello');
      expect(uncapitalizeSentence('Привіт')).toBe('привіт');
    });

    it('should handle sentences with numbers', () => {
      ENGLISH_TEST_DATA.sentences.withNumbers.forEach(sentence => {
        const result = uncapitalizeSentence(sentence);
        const expected = sentence.charAt(0).toLowerCase() + sentence.slice(1);
        expect(result).toBe(expected);
      });
    });

    it('should handle sentences with multiple spaces', () => {
      ENGLISH_TEST_DATA.sentences.withMultipleSpaces.forEach(sentence => {
        const result = uncapitalizeSentence(sentence);
        const expected = sentence.charAt(0).toLowerCase() + sentence.slice(1);
        expect(result).toBe(expected);
      });
    });
  });

  describe('Complex scenarios', () => {
    it('should handle sentences with mixed case', () => {
      const mixedSentences = [
        'HeLLo WoRLd',
        'JaVaScRiPt Is AwEsOmE',
        'ПрОгРаМуВаНнЯ Іс КоОл',
      ];

      mixedSentences.forEach(sentence => {
        const result = uncapitalizeSentence(sentence);
        const expected = sentence.charAt(0).toLowerCase() + sentence.slice(1);
        expect(result).toBe(expected);
      });
    });

    it('should handle sentences with special characters', () => {
      const specialSentences = [
        'Café is delicious',
        'Naïve approach',
        'Résumé writing',
      ];

      specialSentences.forEach(sentence => {
        const result = uncapitalizeSentence(sentence);
        const expected = sentence.charAt(0).toLowerCase() + sentence.slice(1);
        expect(result).toBe(expected);
      });
    });

    it('should handle sentences with emojis', () => {
      const emojiSentences = ['Hello😀 world', 'Привіт🌍 світ', 'Привет🚀 мир'];

      emojiSentences.forEach(sentence => {
        const result = uncapitalizeSentence(sentence);
        const expected = sentence.charAt(0).toLowerCase() + sentence.slice(1);
        expect(result).toBe(expected);
      });
    });
  });
});
