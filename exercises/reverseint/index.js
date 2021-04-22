// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// My solution, everything working but negative numbers
// function reverseInt(n) {
//   if (Math.sign(n) === -1) {
//     n * -1;
//     parseInt(n.toString().split("").reverse().join(""));
//     return n * -1;
//   } else {
//     return parseInt(n.toString().split("").reverse().join(""));
//   }
// }

// His solution
function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n);
  // look at the docs of sign() you lazy butthole
}
module.exports = reverseInt;
