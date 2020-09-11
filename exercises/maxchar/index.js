// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Solution 1 (his solution)
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";
  for (let char of str) {
    // the first part of statement is undefined + 1 which would be null, so either it's 1 or it's adding to what already exists (vid 19.)
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  // for...in... loops used for OBJECTS, for...of... loops used for STRINGS & ARRAYS
  // in the for...in... loop char is the KEYS not the values
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
