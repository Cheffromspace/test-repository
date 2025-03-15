import { sum, multiply } from './utils.js';

/**
 * Main function that demonstrates the utility functions
 */
export function main() {
  console.log('Sum of 5 and 3:', sum(5, 3));
  console.log('Product of 5 and 3:', multiply(5, 3));
}

// Run the main function if this file is executed directly
if (import.meta.url === import.meta.resolve('./index.js')) {
  main();
}
