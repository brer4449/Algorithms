// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1 using .reverse() (booooo, this one SUCKS, so boring, probs won't let you use .reverse() anyway)
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// Solution 2 (came up with on own)
// function reverse(str) {
//   let reversed = [];
//   let strAsArray = str.split("");
//   for (let i = strAsArray.length - 1; i >= 0; i--) {
//     reversed.push(strAsArray[i]);
//   }
//   return reversed.join("");
// }

// Solution 2 (his version which is better...)
// function reverse(str) {
//   let reversed = "";
//   for (character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

// Solution 3 (his solution, more complicated using Array reduce helper function)
function reverse(str) {
  debugger;
  // rev is the accumulator and char is the current value
  return str.split("").reduce((rev, char) => char + rev, "");
}

// when using debugger, it pauses the function so we can see where things went wrong, must also call the function manually when running debugger
// to run debugger, need to cd into that directory and run "node inspect index.js"
reverse("asdfion");

module.exports = reverse;
