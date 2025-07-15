import { isLetter, isValidString } from './utils';

/**
 * Converts the first letter of a word to lowercase
 * @param word - The word to uncapitalize
 * @returns The word with first letter in lowercase
 */
export function uncapitalize(word: string): string {
  if (!isValidString(word)) return word;

  const firstChar = word.charAt(0);
  const rest = word.slice(1);

  if (isLetter(firstChar)) {
    return firstChar.toLowerCase() + rest;
  }

  return word;
}

/**
 * Converts the first letter of the first word in a sentence to lowercase
 * @param sentence - The sentence to uncapitalize
 * @returns The sentence with first word uncapitalized
 */
export function uncapitalizeSentence(sentence: string): string {
  if (!isValidString(sentence)) return sentence;

  const trimmed = sentence.trim();
  if (!trimmed) return '';

  const firstChar = trimmed.charAt(0);
  const rest = trimmed.slice(1);

  if (isLetter(firstChar)) {
    return firstChar.toLowerCase() + rest;
  }

  return sentence;
}
