# Development Guidelines

## Build & Test Commands
- Build: `npm start` (Runs the application)
- Lint: `npm run lint` (Runs ESLint on src and test folders)
- Lint Fix: `npm run lint:fix` (Fixes auto-fixable linting issues)
- Test: `npm test` (Runs all Jest tests)
- Test Watch: `npm run test:watch` (Runs tests in watch mode)

## Code Style Guidelines
- **Formatting**: Use consistent indentation (2 spaces)
- **Naming**: 
  - Variables/functions: camelCase
  - Classes/Interfaces: PascalCase
  - Constants: UPPER_SNAKE_CASE
- **Imports**: Group and sort imports by type (standard library, external, internal)
- **Error Handling**: Use try/catch for synchronous code, catch errors in async functions
- **Types**: Use JSDoc comments for type documentation
- **Comments**: Document public interfaces and complex logic

## Repository Notes
- Repository demonstrates GitHub PR automation with n8n and GitHub API
- Branch naming: feature branches should use format `feat/feature_name`
- PR template available in .github/pull_request_template.md
- CI pipeline runs on PR creation against main branch