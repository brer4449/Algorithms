// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 1 (my solution the easy way)
// function palindrome(str) {
//   return str === str.split("").reverse().join("");
// }

// Solution 2 (my solution the hard way)
// function palindrome(str) {
//   let reversed = str.split("").reduce((rev, char) => char + rev, "");
//   return str === reversed;
// }

// Solution 3 (his way using .every())
// .every() does a boolean check on EVERY element in array ie. array.every(val => val>5) (is every value in the array greater than 5?)
function palindrome(str) {
  return str.split("").every((char, idx) => {
    return char === str[str.length - idx - 1];
  });
}

module.exports = palindrome;
