# Test Repository for PR Automation

This repository demonstrates GitHub Pull Request automation with n8n, GitHub API, and CI pipelines. It includes a PR review workflow where Claude performs automated code reviews when assigned to a PR.

## Features

- Basic Node.js application with utility functions
- Jest test suite for unit testing
- ESLint configuration for code linting
- GitHub Actions CI pipeline triggering on PR creation
- PR template to standardize pull request descriptions
- Integration with automated code review process

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/test-repository.git
cd test-repository

# Install dependencies
npm install
```

## Usage

```bash
# Run the application
npm start

# Run tests
npm test

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix
```

## CI/CD Pipeline

The repository includes a GitHub Actions workflow that:

1. Runs on PR creation against the main branch
2. Executes ESLint checks
3. Runs Jest tests
4. Assigns the PR for automated code review

## PR Review Process

When a PR is created:

1. CI pipeline validates the code (linting and tests)
2. The PR is assigned to an automated reviewer
3. Code review comments are added to the PR
4. Once approved, the PR can be merged