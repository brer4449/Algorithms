// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// My attempt
// function capitalize(str) {
//   return str
//     .split(" ")
//     .map((word) => {
//       word[0].toUpperCase() + word.slice(1);
//     })
//     .join("");
// }

// Solution 1
// function capitalize(str) {
//   let words = [];
//   for (let word of str.split(" ")) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return words.join(" ");
// }

// Solution 2
function capitalize(str) {
  let result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

module.exports = capitalize;

/*
// Solution 1 (his way)
// function chunk(array, size) {
//   const chunked = [];
//   for (let elem of array) {
//     const lastElem = chunked[chunked.length - 1];
//     if (!lastElem || lastElem.length === size) {
//       // putting a new chunk WITH the element already in it
//       chunked.push([elem]);
//     } else {
//       lastElem.push(elem);
//     }
//   }

//   return chunked;
// }

// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// Solution 2 (my attempt at his way with hints) (so close!!)
// function chunk(array, size) {
//   const chunked = [];
//   let idx = 0;
//   while (idx < array.length) {
//     chunked.push(array.slice(idx, size));
//     idx += size;
//   }
//   return chunked;
// }

// Solution 2 (his way)
// function chunk(array, size) {
//   const chunked = [];
//   let idx = 0;
//   while (idx < array.length) {
//     chunked.push(array.slice(idx, idx + size));
//     idx += size;
//   }
//   return chunked;
// }

// Solution 3 (found on the interwebz) using sPlice
// function chunk(array, size) {
//   const chunked = [];
//   let arrayCopy = [...array];
//   // let idx = 0;
//   while (0 < arrayCopy.length) {
//     chunked.push(arrayCopy.splice(0, size));
//   }
//   return chunked;
// }

// Solution 4 (found on the interwebz) using recursion
/*
In this approach, we consistently reduce the problem set(i.e the size of the array) by slicing off chunks of the required size until all elements within the array have been grouped. To this effect, we add a conditional at the beginning to serve as the terminating condition such that when the number of remaining elements is less than or equal to the specified size, we simply return all the remaining elements as one group.
*/
function chunk(array, size) {
  if (array.length <= size) {
    return [array];
  }
  return [array.slice(0, size), ...chunk(array.slice(size), size)];
}
/*
Notice that we use the .slice() method here to extract portions of the array as chunks as well as reduce the size of the original array continuously until the terminating condition is met.
*/
// https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/array-chunking
