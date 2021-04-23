# base32

**zero dependency** base32 encoder/decoder based on [`rfc3548`](http://tools.ietf.org/html/rfc3548#section-5)

## Installation

```sh
npm install @distrentic/base32
```

```sh
yarn add @distrentic/base32
```

## Usage

```typescript
import base32 from "@distrenctic/base32";

const encoded = base32.toBase32("test");

console.log(encoded);
// => ORSXG5AA

console.log(base32.fromBase32(encoded).toString());
// => test
```

## API

### Methods

- **toBase32**(< _string_ | _Uint8Array_ > input) - (_string_) - Encodes the data in `input`.

- **fromBase32**(< _string_ > input) - (_string_) - Decodes the base32 encoded data in `input`.

## License

Licensed under MIT license ([LICENSE](LICENSE) or <http://opensource.org/licenses/MIT>)
