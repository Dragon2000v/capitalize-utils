/**
 * Types for capitalize-utils library
 */

/**
 * Options for custom capitalization
 */
export interface CapitalizeCustomOptions {
  /** Only capitalize the first word */
  firstWordOnly?: boolean;
  /** Words to ignore during capitalization */
  ignoreWords?: string[];
  /** Preserve original case for ignored words */
  preserveCase?: boolean;
}

/**
 * Unicode regex patterns for different alphabets
 */
export const UNICODE_PATTERNS = {
  /** Latin alphabet (a-z, A-Z) */
  LATIN_LETTERS: /[a-zA-Z]/,
  /** Cyrillic alphabet (а-яё, А-ЯЁ) */
  CYRILLIC_LETTERS: /[а-яёА-ЯЁ]/,
  /** Ukrainian alphabet (а-бвгґдеєжзиіїйклмнопрстуфхцчшщьюя, А-БВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ) */
  UKRAINIAN_LETTERS:
    /[а-бвгґдеєжзиіїйклмнопрстуфхцчшщьюяА-БВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ]/,
} as const;
