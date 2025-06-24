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

## Publishing to GitHub Packages

To publish this package to GitHub Packages, you need a GitHub Personal Access Token (PAT) with the following scopes:
- `write:packages`
- `read:packages`
- `repo`

Add this token as a repository secret named `GH_PUBLISH_TOKEN`.

The GitHub Actions workflow will use this token to authenticate and publish the package. See `.github/workflows/publish.yml` for details.

## Testing

To run tests:

```
npm test
```

## License

MIT
