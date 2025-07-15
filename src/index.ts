/**
 * Capitalize Utils - A comprehensive library for text capitalization
 * Supports English, Ukrainian, and Russian languages
 */

// Export all functions
export {
  capitalizeWord,
  capitalizeSentence,
  capitalizeEachWord,
  capitalizeSentences,
  capitalizeWordsIgnoreSmall,
  capitalizeFully,
  capitalizeCustom,
} from "./capitalize";

export { uncapitalize, uncapitalizeSentence } from "./uncapitalize";

// Export types
export type { CapitalizeCustomOptions } from "./types";
export { UNICODE_PATTERNS } from "./types";

// Export utilities (internal use)
export { isLetter, isValidString } from "./utils";

// Export all functions as default object for convenience
import {
  capitalizeWord,
  capitalizeSentence,
  capitalizeEachWord,
  capitalizeSentences,
  capitalizeWordsIgnoreSmall,
  capitalizeFully,
  capitalizeCustom,
} from "./capitalize";

import { uncapitalize, uncapitalizeSentence } from "./uncapitalize";

export default {
  capitalizeWord,
  capitalizeSentence,
  capitalizeEachWord,
  capitalizeSentences,
  capitalizeWordsIgnoreSmall,
  capitalizeFully,
  capitalizeCustom,
  uncapitalize,
  uncapitalizeSentence,
};
