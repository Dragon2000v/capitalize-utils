# capitalize-utils

A comprehensive TypeScript library for text capitalization utilities supporting English, Ukrainian, and Russian languages.

## Features

- 🚀 **Multilingual Support**: Works with English, Ukrainian, and Russian text
- 📦 **Zero Dependencies**: Lightweight and fast
- 🔧 **TypeScript**: Full TypeScript support with type definitions
- 🎯 **Multiple Functions**: 9 different capitalization utilities
- 🛡️ **Robust**: Handles edge cases and invalid input gracefully

## Installation

```bash
npm install capitalize-utils
```

## Quick Start

```typescript
import {
  capitalizeWord,
  capitalizeSentence,
  capitalizeEachWord,
} from "capitalize-utils";

// Basic usage
capitalizeWord("hello"); // 'Hello'
capitalizeSentence("hello world"); // 'Hello world'
capitalizeEachWord("hello world"); // 'Hello World'
```

## API Reference

### `capitalizeWord(word: string): string`

Capitalizes the first letter of a single word.

```typescript
import { capitalizeWord } from "capitalize-utils";

capitalizeWord("hello"); // 'Hello'
capitalizeWord("WORLD"); // 'World'
capitalizeWord("привіт"); // 'Привіт'
capitalizeWord("мир"); // 'Мир'
```

### `capitalizeSentence(sentence: string): string`

Capitalizes the first letter of the first word in a sentence.

```typescript
import { capitalizeSentence } from "capitalize-utils";

capitalizeSentence("hello world"); // 'Hello world'
capitalizeSentence("привіт світ"); // 'Привіт світ'
capitalizeSentence("  hello world  "); // 'Hello world'
```

### `capitalizeEachWord(text: string): string`

Capitalizes the first letter of each word in a string.

```typescript
import { capitalizeEachWord } from "capitalize-utils";

capitalizeEachWord("hello world"); // 'Hello World'
capitalizeEachWord("привіт світ"); // 'Привіт Світ'
capitalizeEachWord("hello, world!"); // 'Hello, World!'
```

### `capitalizeSentences(text: string): string`

Capitalizes the first letter of each sentence in a text.

```typescript
import { capitalizeSentences } from "capitalize-utils";

capitalizeSentences("hello world. how are you?");
// 'Hello world. How are you?'

capitalizeSentences("привіт світ. як справи?");
// 'Привіт світ. Як справи?'
```

### `capitalizeWordsIgnoreSmall(text: string, smallWords?: string[]): string`

Capitalizes words but ignores small words (articles, prepositions, etc.).

```typescript
import { capitalizeWordsIgnoreSmall } from "capitalize-utils";

capitalizeWordsIgnoreSmall("the quick brown fox");
// 'The Quick Brown Fox'

capitalizeWordsIgnoreSmall("a tale of two cities");
// 'A Tale of Two Cities'

// Custom small words
capitalizeWordsIgnoreSmall("hello and world", ["and"]);
// 'Hello and World'
```

### `capitalizeFully(text: string): string`

Capitalizes all letters in the text.

```typescript
import { capitalizeFully } from "capitalize-utils";

capitalizeFully("hello world"); // 'HELLO WORLD'
capitalizeFully("привіт світ"); // 'ПРИВІТ СВІТ'
```

### `capitalizeCustom(text: string, options?: object): string`

Custom capitalization with specific rules.

```typescript
import { capitalizeCustom } from "capitalize-utils";

// Only capitalize first word
capitalizeCustom("hello world", { firstWordOnly: true });
// 'Hello world'

// Ignore specific words
capitalizeCustom("hello and world", { ignoreWords: ["and"] });
// 'Hello and World'

// Preserve case for ignored words
capitalizeCustom("Hello AND World", {
  ignoreWords: ["and"],
  preserveCase: true,
}); // 'Hello AND World'
```

### `uncapitalize(word: string): string`

Converts the first letter of a word to lowercase.

```typescript
import { uncapitalize } from "capitalize-utils";

uncapitalize("Hello"); // 'hello'
uncapitalize("WORLD"); // 'wORLD'
uncapitalize("Привіт"); // 'привіт'
```

### `uncapitalizeSentence(sentence: string): string`

Converts the first letter of the first word in a sentence to lowercase.

```typescript
import { uncapitalizeSentence } from "capitalize-utils";

uncapitalizeSentence("Hello world"); // 'hello world'
uncapitalizeSentence("Привіт світ"); // 'привіт світ'
```

## Multilingual Examples

### English

```typescript
import { capitalizeEachWord } from "capitalize-utils";

capitalizeEachWord("hello world"); // 'Hello World'
capitalizeEachWord("the quick brown fox"); // 'The Quick Brown Fox'
```

### Ukrainian

```typescript
import { capitalizeEachWord } from "capitalize-utils";

capitalizeEachWord("привіт світ"); // 'Привіт Світ'
capitalizeEachWord("як справи?"); // 'Як Справи?'
```

### Russian

```typescript
import { capitalizeEachWord } from "capitalize-utils";

capitalizeEachWord("привет мир"); // 'Привет Мир'
capitalizeEachWord("как дела?"); // 'Как Дела?'
```

## Default Import

You can also import all functions as a default object:

```typescript
import capitalizeUtils from "capitalize-utils";

capitalizeUtils.capitalizeWord("hello"); // 'Hello'
capitalizeUtils.capitalizeEachWord("hello world"); // 'Hello World'
```

## Development

### Building

```bash
npm run build
```

### Development Mode

```bash
npm run dev
```

### Clean Build

```bash
npm run clean
npm run build
```

## License

MIT

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Changelog

### 1.0.0

- Initial release
- Support for English, Ukrainian, and Russian languages
- 9 capitalization utility functions
- Full TypeScript support
