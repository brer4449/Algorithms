// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//Solution 1 iterative solution
// function fib(n) {
//   const result = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1];
//     const b = result[i - 2];
//     result.push(a + b);
//   }
//   return result[n];
// }

// Solution 2 recursive solution (without memoization)
// function fib(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// Iterative solution is linear runtime and recursive solution is exponential runtime. Exponential run time is a no-no, so interviewer might ask how we can optimize runtime/improve performance? MEMOIZATION
// Memoization is storing the arguments of each function call along with the result. If the function is called again with the *same arguments*, return the precomputed result, rather than running the function again.

// Solution 3 recursive solution (WITH memoization)
function memoize(fn) {
  // a record of all the previous calls to this function and their respective results
  const cache = {};
  return function (...args) {
    // "Have we ever called this function with this particular set of arguments before?" If so, return 'em
    if (cache[args]) {
      return cache[args];
    }

    // if we HAVEN'T ran this function with this particular set of arguments, then we'll call the original function (the slow fib function in this case)
    const result = fn.apply(this, args);
    cache[args] = result;
    // in the cache object, at the key args, store the result of that function call
    return result;
  };
}

function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

// the above can alternatively be written as:
/*
function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);
*/

module.exports = fib;
