function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.');
    // Or alternatively:
    // return 0; // Return a default value
    // console.warn('Null value encountered.'); // Log a warning
  }
  // ... rest of the function
}