// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1 (LAME)
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// Solution 2 my way
// function reverse(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }
// his way
// function reverse(str) {
//   let reversed = "";
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

// Solution 3
function reverse(str) {
  // reduce takes two arguments, a function and a starting value
  return str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
  // whenever reduce runs, it takes the starting argument, pass it into the arrow function as the first argument, and then whatever gets returned from that function will then be used as the starting argument for every successive run of the function
  // in total the function runs one time for every element in the array
  // named arguments as such because the first one passed in is our reversed string, the second one passed in is the character we're operating on out of our array
}

module.exports = reverse;
