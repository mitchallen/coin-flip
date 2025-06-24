.PHONY: help build test clean publish

help:
	@echo "Available targets:"
	@echo "  help     Show this help message"
	@echo "  build    Compile TypeScript to JavaScript (dist/)"
	@echo "  test     Run tests with Jest"
	@echo "  clean    Remove build output (dist/)"
	@echo "  publish  Switch to main, bump version, and push to GitHub"

build:
	npm run build

test:
	npm test

clean:
	rm -rf dist

publish:
	@echo "Switching to main branch..."
	git checkout main
	@echo "Incrementing version..."
	npm version patch
	@echo "Pushing changes and tags..."
	git push && git push --tags
