import { isLetter, isValidString } from './utils';
import { CapitalizeCustomOptions } from './types';

/**
 * Capitalizes the first letter of a single word
 * @param word - The word to capitalize
 * @returns The word with first letter capitalized
 */
export function capitalizeWord(word: string): string {
  if (!isValidString(word)) return word;

  const firstChar = word.charAt(0);
  const rest = word.slice(1);

  if (isLetter(firstChar)) {
    return firstChar.toUpperCase() + rest.toLowerCase();
  }

  return word;
}

/**
 * Capitalizes the first letter of the first word in a sentence
 * @param sentence - The sentence to capitalize
 * @returns The sentence with first word capitalized
 */
export function capitalizeSentence(sentence: string): string {
  if (!isValidString(sentence)) return sentence;

  const trimmed = sentence.trim();
  if (!trimmed) return '';

  const firstChar = trimmed.charAt(0);
  const rest = trimmed.slice(1);

  if (isLetter(firstChar)) {
    return firstChar.toUpperCase() + rest;
  }

  return sentence;
}

/**
 * Capitalizes the first letter of each word in a string
 * @param text - The text to process
 * @returns Text with each word capitalized
 */
export function capitalizeEachWord(text: string): string {
  if (!isValidString(text)) return text;

  return text
    .split(/(\s+)/)
    .map(part => {
      // If it's whitespace, return as is, otherwise capitalize
      return /\s+/.test(part) ? part : capitalizeWord(part);
    })
    .join('');
}

/**
 * Capitalizes the first letter of each sentence in a text
 * @param text - The text to process
 * @returns Text with each sentence capitalized
 */
export function capitalizeSentences(text: string): string {
  if (!isValidString(text)) return text;

  // Split by sentence endings (.!?) followed by whitespace or end of string
  const sentences = text.split(/([.!?]+\s+)/);

  return sentences
    .map((part, index) => {
      // Even indices are sentence content, odd indices are punctuation + whitespace
      if (index % 2 === 0) {
        return capitalizeSentence(part);
      }
      return part;
    })
    .join('');
}

/**
 * Capitalizes words but ignores small words (articles, prepositions, etc.)
 * @param text - The text to process
 * @param smallWords - Array of small words to ignore (default: common English articles/prepositions)
 * @returns Text with important words capitalized
 */
export function capitalizeWordsIgnoreSmall(
  text: string,
  smallWords: string[] = [
    'a',
    'an',
    'and',
    'as',
    'at',
    'but',
    'by',
    'for',
    'if',
    'in',
    'nor',
    'of',
    'on',
    'or',
    'so',
    'the',
    'to',
    'up',
    'yet',
  ]
): string {
  if (!isValidString(text)) return text;

  const words = text.split(/\s+/);

  return words
    .map((word, index) => {
      const cleanWord = word.replace(/[^\wа-яё]/gi, '').toLowerCase();

      // Always capitalize first and last word, and words not in smallWords list
      if (
        index === 0 ||
        index === words.length - 1 ||
        !smallWords.includes(cleanWord)
      ) {
        return capitalizeWord(word);
      }

      return word.toLowerCase();
    })
    .join(' ');
}

/**
 * Capitalizes all letters in the text
 * @param text - The text to fully capitalize
 * @returns Fully capitalized text
 */
export function capitalizeFully(text: string): string {
  if (!isValidString(text)) return text;

  return text.toUpperCase();
}

/**
 * Custom capitalization with specific rules
 * @param text - The text to process
 * @param options - Customization options
 * @returns Text with custom capitalization applied
 */
export function capitalizeCustom(
  text: string,
  options: CapitalizeCustomOptions = {}
): string {
  if (!isValidString(text)) return text;

  const {
    firstWordOnly = false,
    ignoreWords = [],
    preserveCase = false,
  } = options;

  if (firstWordOnly) {
    return capitalizeSentence(text);
  }

  const words = text.split(/\s+/);

  return words
    .map(word => {
      const cleanWord = word.replace(/[^\wа-яё]/gi, '').toLowerCase();

      if (ignoreWords.includes(cleanWord)) {
        return preserveCase ? word : word.toLowerCase();
      }

      return capitalizeWord(word);
    })
    .join(' ');
}
