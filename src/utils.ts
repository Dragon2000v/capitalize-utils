import { UNICODE_PATTERNS } from "./types";

/**
 * Checks if a character is a letter (Latin, Cyrillic, or Ukrainian)
 * @param char - The character to check
 * @returns True if the character is a letter
 */
export function isLetter(char: string): boolean {
  return (
    UNICODE_PATTERNS.LATIN_LETTERS.test(char) ||
    UNICODE_PATTERNS.CYRILLIC_LETTERS.test(char) ||
    UNICODE_PATTERNS.UKRAINIAN_LETTERS.test(char)
  );
}

/**
 * Safely validates string input
 * @param input - The input to validate
 * @returns True if input is a valid non-empty string
 */
export function isValidString(input: unknown): input is string {
  return typeof input === "string" && input.length > 0;
}
