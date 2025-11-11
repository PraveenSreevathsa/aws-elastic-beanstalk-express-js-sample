// fibonacci.js

function generateFibonacci(n) {
  const fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib.slice(0, n);
}

// Example: Generate first 10 numbers
const n = 10;
console.log(`Fibonacci series up to ${n} terms:`);
console.log(generateFibonacci(n));
