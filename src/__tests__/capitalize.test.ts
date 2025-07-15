import { describe, it, expect } from 'vitest';
import {
  capitalizeWord,
  capitalizeSentence,
  capitalizeEachWord,
  capitalizeSentences,
  capitalizeWordsIgnoreSmall,
  capitalizeFully,
  capitalizeCustom,
} from '../capitalize';
import {
  ENGLISH_TEST_DATA,
  UKRAINIAN_TEST_DATA,
  RUSSIAN_TEST_DATA,
  EDGE_CASES,
  SMALL_WORDS,
  EXPECTED_RESULTS,
} from './__mocks__/testData';

describe('capitalizeWord', () => {
  describe('English words', () => {
    it('should capitalize lowercase words', () => {
      ENGLISH_TEST_DATA.words.lowercase.forEach(word => {
        const result = capitalizeWord(word);
        expect(result).toBe(
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        );
      });
    });

    it('should handle uppercase words', () => {
      ENGLISH_TEST_DATA.words.uppercase.forEach(word => {
        const result = capitalizeWord(word);
        expect(result).toBe(
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        );
      });
    });

    it('should preserve already capitalized words', () => {
      ENGLISH_TEST_DATA.words.mixed.forEach(word => {
        const result = capitalizeWord(word);
        expect(result).toBe(
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        );
      });
    });
  });

  describe('Ukrainian words', () => {
    it('should capitalize Ukrainian words', () => {
      UKRAINIAN_TEST_DATA.words.lowercase.forEach(word => {
        const result = capitalizeWord(word);
        expect(result).toBe(
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        );
      });
    });

    it('should handle Ukrainian special characters', () => {
      UKRAINIAN_TEST_DATA.words.withSpecialChars.forEach(word => {
        const result = capitalizeWord(word);
        expect(result).toBe(
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        );
      });
    });
  });

  describe('Russian words', () => {
    it('should capitalize Russian words', () => {
      RUSSIAN_TEST_DATA.words.lowercase.forEach(word => {
        const result = capitalizeWord(word);
        expect(result).toBe(
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        );
      });
    });

    it('should handle Russian special characters', () => {
      RUSSIAN_TEST_DATA.words.withSpecialChars.forEach(word => {
        const result = capitalizeWord(word);
        expect(result).toBe(
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        );
      });
    });
  });

  describe('Edge cases', () => {
    it('should handle words with numbers', () => {
      ENGLISH_TEST_DATA.words.withNumbers.forEach(word => {
        const result = capitalizeWord(word);
        if (/^[a-zA-Z]/.test(word)) {
          expect(result).toBe(
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          );
        } else {
          expect(result).toBe(word);
        }
      });
    });

    it('should handle words with symbols', () => {
      ENGLISH_TEST_DATA.words.withSymbols.forEach(word => {
        const result = capitalizeWord(word);
        if (/^[a-zA-Z]/.test(word)) {
          expect(result).toBe(
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          );
        } else {
          expect(result).toBe(word);
        }
      });
    });

    it('should handle empty strings and invalid input', () => {
      ENGLISH_TEST_DATA.words.empty.forEach(input => {
        const result = capitalizeWord(input);
        expect(result).toBe(input);
      });

      expect(capitalizeWord(null as any)).toBe(null);
      expect(capitalizeWord(undefined as any)).toBe(undefined);
      expect(capitalizeWord(123 as any)).toBe(123);
    });

    it('should handle single characters', () => {
      EDGE_CASES.singleCharacters.forEach(char => {
        const result = capitalizeWord(char);
        if (/[a-zA-Zа-яё]/i.test(char)) {
          expect(result).toBe(char.toUpperCase());
        } else {
          expect(result).toBe(char);
        }
      });
    });

    it('should handle very long words', () => {
      EDGE_CASES.veryLongWords.forEach(word => {
        const result = capitalizeWord(word);
        expect(result).toBe(
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        );
      });
    });

    it('should handle unicode characters', () => {
      EDGE_CASES.unicode.forEach(word => {
        const result = capitalizeWord(word);
        expect(result).toBe(
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        );
      });
    });

    it('should handle emojis', () => {
      EDGE_CASES.emojis.forEach(word => {
        const result = capitalizeWord(word);
        expect(result).toBe(
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        );
      });
    });
  });

  describe('Expected results validation', () => {
    Object.entries(EXPECTED_RESULTS.capitalizeWord).forEach(
      ([input, expected]) => {
        it(`should handle "${input}" correctly`, () => {
          expect(capitalizeWord(input)).toBe(expected);
        });
      }
    );
  });
});

describe('capitalizeSentence', () => {
  describe('English sentences', () => {
    it('should capitalize first word in simple sentences', () => {
      ENGLISH_TEST_DATA.sentences.simple.forEach(sentence => {
        const result = capitalizeSentence(sentence);
        const expected = sentence.charAt(0).toUpperCase() + sentence.slice(1);
        expect(result).toBe(expected);
      });
    });

    it('should handle sentences with punctuation', () => {
      ENGLISH_TEST_DATA.sentences.withPunctuation.forEach(sentence => {
        const result = capitalizeSentence(sentence);
        const expected = sentence.charAt(0).toUpperCase() + sentence.slice(1);
        expect(result).toBe(expected);
      });
    });
  });

  describe('Multilingual sentences', () => {
    it('should handle Ukrainian sentences', () => {
      UKRAINIAN_TEST_DATA.sentences.simple.forEach(sentence => {
        const result = capitalizeSentence(sentence);
        const expected = sentence.charAt(0).toUpperCase() + sentence.slice(1);
        expect(result).toBe(expected);
      });
    });

    it('should handle Russian sentences', () => {
      RUSSIAN_TEST_DATA.sentences.simple.forEach(sentence => {
        const result = capitalizeSentence(sentence);
        const expected = sentence.charAt(0).toUpperCase() + sentence.slice(1);
        expect(result).toBe(expected);
      });
    });
  });

  describe('Edge cases', () => {
    it('should handle whitespace correctly', () => {
      expect(capitalizeSentence('  hello world  ')).toBe('Hello world');
      expect(capitalizeSentence('\t\nhello world\t\n')).toBe('Hello world');
    });

    it('should handle empty strings', () => {
      ENGLISH_TEST_DATA.sentences.empty.forEach(input => {
        const result = capitalizeSentence(input);
        expect(result).toBe('');
      });
    });

    it('should handle invalid input', () => {
      expect(capitalizeSentence(null as any)).toBe(null);
      expect(capitalizeSentence(undefined as any)).toBe(undefined);
      expect(capitalizeSentence(123 as any)).toBe(123);
    });
  });

  describe('Expected results validation', () => {
    Object.entries(EXPECTED_RESULTS.capitalizeSentence).forEach(
      ([input, expected]) => {
        it(`should handle "${input}" correctly`, () => {
          expect(capitalizeSentence(input)).toBe(expected);
        });
      }
    );
  });
});

describe('capitalizeEachWord', () => {
  describe('English text', () => {
    it('should capitalize each word in simple text', () => {
      ENGLISH_TEST_DATA.sentences.simple.forEach(text => {
        const result = capitalizeEachWord(text);
        const expected = text
          .split(/\s+/)
          .map(
            word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(' ');
        expect(result).toBe(expected);
      });
    });

    it('should handle text with punctuation', () => {
      ENGLISH_TEST_DATA.sentences.withPunctuation.forEach(text => {
        const result = capitalizeEachWord(text);
        // Split by whitespace and capitalize each word
        const words = text.split(/\s+/);
        const expected = words
          .map(word => {
            const firstChar = word.charAt(0);
            if (/[a-zA-Zа-яё]/i.test(firstChar)) {
              return firstChar.toUpperCase() + word.slice(1).toLowerCase();
            }
            return word;
          })
          .join(' ');
        expect(result).toBe(expected);
      });
    });

    it('should preserve multiple spaces', () => {
      ENGLISH_TEST_DATA.sentences.withMultipleSpaces.forEach(text => {
        const result = capitalizeEachWord(text);
        expect(result).toMatch(
          /^[A-Z][a-z]+\s{3}[A-Z][a-z]+(\s{3}[A-Z][a-z]+)*$/
        );
      });
    });
  });

  describe('Multilingual text', () => {
    it('should handle Ukrainian text', () => {
      UKRAINIAN_TEST_DATA.sentences.simple.forEach(text => {
        const result = capitalizeEachWord(text);
        const expected = text
          .split(/\s+/)
          .map(
            word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(' ');
        expect(result).toBe(expected);
      });
    });

    it('should handle Russian text', () => {
      RUSSIAN_TEST_DATA.sentences.simple.forEach(text => {
        const result = capitalizeEachWord(text);
        const expected = text
          .split(/\s+/)
          .map(
            word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(' ');
        expect(result).toBe(expected);
      });
    });
  });

  describe('Edge cases', () => {
    it('should handle empty strings', () => {
      expect(capitalizeEachWord('')).toBe('');
      expect(capitalizeEachWord('   ')).toBe('   ');
    });

    it('should handle single words', () => {
      expect(capitalizeEachWord('hello')).toBe('Hello');
      expect(capitalizeEachWord('привіт')).toBe('Привіт');
    });

    it('should handle text with numbers', () => {
      ENGLISH_TEST_DATA.sentences.withNumbers.forEach(text => {
        const result = capitalizeEachWord(text);
        if (text === 'hello 123 world') {
          expect(result).toBe('Hello 123 World');
        } else if (text === '123 hello world') {
          expect(result).toBe('123 Hello World');
        } else {
          expect(typeof result).toBe('string');
        }
      });
    });
  });

  describe('Expected results validation', () => {
    Object.entries(EXPECTED_RESULTS.capitalizeEachWord).forEach(
      ([input, expected]) => {
        it(`should handle "${input}" correctly`, () => {
          expect(capitalizeEachWord(input)).toBe(expected);
        });
      }
    );
  });
});

describe('capitalizeSentences', () => {
  describe('Multiple sentences', () => {
    it('should capitalize first letter of each sentence', () => {
      ENGLISH_TEST_DATA.texts.multipleSentences.forEach(text => {
        const result = capitalizeSentences(text);
        // Split by sentence endings and capitalize each sentence
        const sentences = text.split(/([.!?]+\s+)/);
        const expected = sentences
          .map((part, index) => {
            if (index % 2 === 0) {
              return part.charAt(0).toUpperCase() + part.slice(1);
            }
            return part;
          })
          .join('');
        expect(result).toBe(expected);
      });
    });

    it('should handle different sentence endings', () => {
      const text = 'hello! how are you? goodbye.';
      const result = capitalizeSentences(text);
      expect(result).toBe('Hello! How are you? Goodbye.');
    });
  });

  describe('Edge cases', () => {
    it('should handle single sentence', () => {
      expect(capitalizeSentences('hello world')).toBe('Hello world');
    });

    it('should handle empty string', () => {
      expect(capitalizeSentences('')).toBe('');
    });

    it('should handle text without sentence endings', () => {
      expect(capitalizeSentences('hello world how are you')).toBe(
        'Hello world how are you'
      );
    });
  });
});

describe('capitalizeWordsIgnoreSmall', () => {
  describe('English text with small words', () => {
    it('should capitalize important words, ignore small ones', () => {
      ENGLISH_TEST_DATA.texts.withSmallWords.forEach(text => {
        const result = capitalizeWordsIgnoreSmall(text);
        if (text === 'the quick brown fox') {
          expect(result).toBe('The Quick Brown Fox');
        } else if (text === 'a tale of two cities') {
          expect(result).toBe('A Tale of Two Cities');
        } else if (text === 'hello and world') {
          expect(result).toBe('Hello and World');
        } else {
          expect(typeof result).toBe('string');
        }
      });
    });

    it('should always capitalize first and last word', () => {
      const result = capitalizeWordsIgnoreSmall('the and of');
      expect(result).toBe('The and Of');
    });
  });

  describe('Custom small words', () => {
    it('should handle custom small words list', () => {
      const result = capitalizeWordsIgnoreSmall('hello and world', ['and']);
      expect(result).toBe('Hello and World');
    });

    it('should handle empty small words list', () => {
      const result = capitalizeWordsIgnoreSmall('hello and world', []);
      expect(result).toBe('Hello And World');
    });
  });

  describe('Edge cases', () => {
    it('should handle single word', () => {
      expect(capitalizeWordsIgnoreSmall('hello')).toBe('Hello');
    });

    it('should handle empty string', () => {
      expect(capitalizeWordsIgnoreSmall('')).toBe('');
    });

    it('should handle text with only small words', () => {
      expect(capitalizeWordsIgnoreSmall('the and of')).toBe('The and Of');
    });
  });
});

describe('capitalizeFully', () => {
  describe('English text', () => {
    it('should capitalize all letters', () => {
      ENGLISH_TEST_DATA.sentences.simple.forEach(text => {
        const result = capitalizeFully(text);
        expect(result).toBe(text.toUpperCase());
      });
    });
  });

  describe('Multilingual text', () => {
    it('should handle Ukrainian text', () => {
      UKRAINIAN_TEST_DATA.sentences.simple.forEach(text => {
        const result = capitalizeFully(text);
        expect(result).toBe(text.toUpperCase());
      });
    });

    it('should handle Russian text', () => {
      RUSSIAN_TEST_DATA.sentences.simple.forEach(text => {
        const result = capitalizeFully(text);
        expect(result).toBe(text.toUpperCase());
      });
    });
  });

  describe('Edge cases', () => {
    it('should handle already uppercase text', () => {
      expect(capitalizeFully('HELLO WORLD')).toBe('HELLO WORLD');
    });

    it('should handle mixed case text', () => {
      expect(capitalizeFully('HeLLo WoRLd')).toBe('HELLO WORLD');
    });

    it('should handle empty string', () => {
      expect(capitalizeFully('')).toBe('');
    });

    it('should handle text with numbers and symbols', () => {
      expect(capitalizeFully('hello123!@#')).toBe('HELLO123!@#');
    });
  });
});

describe('capitalizeCustom', () => {
  describe('First word only option', () => {
    it('should capitalize only first word when specified', () => {
      const result = capitalizeCustom('hello world', { firstWordOnly: true });
      expect(result).toBe('Hello world');
    });

    it('should work with multilingual text', () => {
      const result = capitalizeCustom('привіт світ', { firstWordOnly: true });
      expect(result).toBe('Привіт світ');
    });
  });

  describe('Ignore words option', () => {
    it('should ignore specified words', () => {
      const result = capitalizeCustom('hello and world', {
        ignoreWords: ['and'],
      });
      expect(result).toBe('Hello and World');
    });

    it('should handle multiple ignored words', () => {
      const result = capitalizeCustom('hello and or world', {
        ignoreWords: ['and', 'or'],
      });
      expect(result).toBe('Hello and or World');
    });
  });

  describe('Preserve case option', () => {
    it('should preserve case for ignored words when specified', () => {
      const result = capitalizeCustom('Hello AND World', {
        ignoreWords: ['and'],
        preserveCase: true,
      });
      expect(result).toBe('Hello AND World');
    });

    it('should lowercase ignored words when preserveCase is false', () => {
      const result = capitalizeCustom('Hello AND World', {
        ignoreWords: ['and'],
        preserveCase: false,
      });
      expect(result).toBe('Hello and World');
    });
  });

  describe('Default behavior', () => {
    it('should default to capitalize each word', () => {
      const result = capitalizeCustom('hello world');
      expect(result).toBe('Hello World');
    });

    it('should handle empty options object', () => {
      const result = capitalizeCustom('hello world', {});
      expect(result).toBe('Hello World');
    });
  });

  describe('Edge cases', () => {
    it('should handle empty string', () => {
      expect(capitalizeCustom('')).toBe('');
    });

    it('should handle single word', () => {
      expect(capitalizeCustom('hello')).toBe('Hello');
    });

    it('should handle all options together', () => {
      const result = capitalizeCustom('hello AND world', {
        firstWordOnly: false,
        ignoreWords: ['and'],
        preserveCase: true,
      });
      expect(result).toBe('Hello AND World');
    });
  });
});
