// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// My solution
// function vowels(str) {
//   let count = 0;
//   str
//     .toLowerCase()
//     .split("")
//     .forEach((char) => {
//       if (
//         char === "a" ||
//         char === "e" ||
//         char === "i" ||
//         char === "o" ||
//         char === "u"
//       ) {
//         count++;
//       }
//     });
//   return count;
// }

// // Solution 1 (his way)
// function vowels(str) {
//   let count = 0;
//   const checker = ["a", "e", "i", "o", "u"];
//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

// Solution 2 using regex!
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;
