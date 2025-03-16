import { sum, multiply } from './utils.js';

/**
 * Main function that demonstrates the utility functions
 * @returns {void}
 */
export function main() {
  try {
    console.log('Sum of 5 and 3:', sum(5, 3));
    console.log('Product of 5 and 3:', multiply(5, 3));
  } catch (error) {
    console.error('Error in main function:', error.message);
  }
}

// Run the main function if this file is executed directly
if (import.meta.url.endsWith('index.js') && process.argv[1] === import.meta.url) {
  main();
}
