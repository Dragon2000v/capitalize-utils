/**
 * Test data for capitalize-utils library
 */

// English test data
export const ENGLISH_TEST_DATA = {
  words: {
    lowercase: ['hello', 'world', 'javascript', 'typescript'],
    uppercase: ['HELLO', 'WORLD', 'JAVASCRIPT', 'TYPESCRIPT'],
    mixed: ['Hello', 'World', 'JavaScript', 'TypeScript'],
    withNumbers: ['123hello', 'hello123', 'h3ll0'],
    withSymbols: ['!hello', 'hello!', 'h@llo', 'h#llo'],
    empty: ['', '   ', '\t', '\n'],
  },
  sentences: {
    simple: ['hello world', 'how are you', 'good morning'],
    withPunctuation: ['hello, world!', 'how are you?', 'good morning.'],
    withMultipleSpaces: ['hello   world', 'how   are   you'],
    withNumbers: ['hello 123 world', '123 hello world'],
    empty: ['', '   ', '\t\n'],
  },
  texts: {
    multipleSentences: [
      'hello world. how are you? goodbye!',
      'привіт світ. як справи? до побачення!',
      'привет мир. как дела? до свидания!',
    ],
    withSmallWords: [
      'the quick brown fox',
      'a tale of two cities',
      'hello and world',
    ],
  },
};

// Ukrainian test data
export const UKRAINIAN_TEST_DATA = {
  words: {
    lowercase: ['привіт', 'світ', 'україна', 'програмування'],
    uppercase: ['ПРИВІТ', 'СВІТ', 'УКРАЇНА', 'ПРОГРАМУВАННЯ'],
    mixed: ['Привіт', 'Світ', 'Україна', 'Програмування'],
    withSpecialChars: ['ґудзик', 'європа', 'їжак', 'йогурт'],
    empty: ['', '   ', '\t', '\n'],
  },
  sentences: {
    simple: ['привіт світ', 'як справи', 'добрий ранок'],
    withPunctuation: ['привіт, світ!', 'як справи?', 'добрий ранок.'],
    withMultipleSpaces: ['привіт   світ', 'як   справи'],
  },
};

// Russian test data
export const RUSSIAN_TEST_DATA = {
  words: {
    lowercase: ['привет', 'мир', 'россия', 'программирование'],
    uppercase: ['ПРИВЕТ', 'МИР', 'РОССИЯ', 'ПРОГРАММИРОВАНИЕ'],
    mixed: ['Привет', 'Мир', 'Россия', 'Программирование'],
    withSpecialChars: ['ёлка', 'йогурт'],
    empty: ['', '   ', '\t', '\n'],
  },
  sentences: {
    simple: ['привет мир', 'как дела', 'доброе утро'],
    withPunctuation: ['привет, мир!', 'как дела?', 'доброе утро.'],
    withMultipleSpaces: ['привет   мир', 'как   дела'],
  },
};

// Edge cases and special scenarios
export const EDGE_CASES = {
  singleCharacters: ['a', 'A', 'а', 'А', '1', '!', ' '],
  veryLongWords: [
    'supercalifragilisticexpialidocious',
    'суперкаліфрагілістікекспіалідошус',
    'суперкалифрагилистикэкспиалидошус',
  ],
  unicode: ['café', 'naïve', 'façade', 'résumé'],
  emojis: ['hello😀', 'привіт🌍', 'привет🚀'],
  html: ['<hello>', '&world;', '<div>test</div>'],
  whitespace: [' ', '\t', '\n', '\r', '\f', '\v'],
};

// Small words for testing capitalizeWordsIgnoreSmall
export const SMALL_WORDS = {
  english: [
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
  ],
  ukrainian: [
    'і',
    'в',
    'на',
    'за',
    'до',
    'з',
    'у',
    'про',
    'без',
    'над',
    'під',
    'між',
    'через',
  ],
  russian: [
    'и',
    'в',
    'на',
    'за',
    'до',
    'с',
    'у',
    'про',
    'без',
    'над',
    'под',
    'между',
    'через',
  ],
  custom: ['test', 'custom', 'words'],
};

// Expected results for various functions
export const EXPECTED_RESULTS = {
  capitalizeWord: {
    hello: 'Hello',
    WORLD: 'World',
    привіт: 'Привіт',
    мир: 'Мир',
    '': '',
    '123hello': '123hello',
    '!world': '!world',
  },
  capitalizeSentence: {
    'hello world': 'Hello world',
    'привіт світ': 'Привіт світ',
    '  hello world  ': 'Hello world',
    '': '',
    '   ': '',
  },
  capitalizeEachWord: {
    'hello world': 'Hello World',
    'привіт світ': 'Привіт Світ',
    'hello, world!': 'Hello, World!',
    'hello   world': 'Hello   World',
  },
  uncapitalize: {
    Hello: 'hello',
    WORLD: 'wORLD',
    Привіт: 'привіт',
    '': '',
    '123Hello': '123Hello',
  },
};
