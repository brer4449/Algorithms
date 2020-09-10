// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// My failed attempt
// function reverseInt(n) {
//   if (Math.sign(n) === 1) {
//     n.toString()
//       .split("")
//       .reduce((rev, char) => char + rev, "");
//   } else if (Math.sign(n) === -1) {
//     `-${n
//       .toString()
//       .split("")
//       .reduce((rev, char) => char + rev, "")}`;
//   }
// }

// His solution
function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n);
}
module.exports = reverseInt;
