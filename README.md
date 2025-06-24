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

### Why is a PAT required for public packages on GitHub Packages?

A public npm package hosted on GitHub Packages (using `@OWNER/package-name` syntax) still requires a Personal Access Token (PAT) to install — even if it's public — due to how GitHub Packages works.

**Why This Happens:**
GitHub Packages (npm registry at https://npm.pkg.github.com) enforces authentication for all package access, regardless of the package's visibility.

- Unlike registry.npmjs.org, GitHub Packages does not support unauthenticated access, even for public packages.
- This is by design: GitHub's registry enforces authentication to:
  - Track usage by user/org
  - Support fine-grained permissions
  - Enforce rate limiting
- There is no anonymous access to npm.pkg.github.com.

**What You Need:**
To install any package from https://npm.pkg.github.com, you must:
- Use a Personal Access Token (PAT) with at least `read:packages` scope.
- Configure your `.npmrc` like this:

```
//npm.pkg.github.com/:_authToken=YOUR_PAT
@YOUR_GITHUB_USERNAME:registry=https://npm.pkg.github.com/
```

Replace `YOUR_GITHUB_USERNAME` with the GitHub org or username as needed.

## Usage

```typescript
import { coinFlip } from '@mitchallen/coin-flip';

const result = coinFlip();
console.log(result); // 0 or 1
```

## Makefile Usage

This project includes a `Makefile` to simplify common development tasks. Run the following commands from the project root:

- `make` or `make help` — Show available make targets and descriptions
- `make build` — Compile TypeScript to JavaScript (output to `dist/`)
- `make test` — Run tests with Jest
- `make clean` — Remove the build output (`dist/`)
- `make publish` — Switch to the main branch, increment the patch version, and push changes and tags (triggers GitHub Actions publish workflow)

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
