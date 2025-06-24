# @mitchallen/coin-flip

A simple coin flip utility for Node.js and TypeScript that returns 0 or 1.

## Installation

By default, npm will try to pull packages from the public npm registry. To install this package from GitHub Packages, you need to configure your `.npmrc`:

```
@mitchallen:registry=https://npm.pkg.github.com/
```

If you are using a Personal Access Token (PAT), add this line as well:

```
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

Then install:

```
npm install @mitchallen/coin-flip
```

## Usage

```typescript
import { coinFlip } from '@mitchallen/coin-flip';

const result = coinFlip();
console.log(result); // 0 or 1
```

## API

### `coinFlip()`
Returns either 0 or 1, simulating a fair coin flip.

## Testing

To run tests:

```
npm test
```

## License

MIT
