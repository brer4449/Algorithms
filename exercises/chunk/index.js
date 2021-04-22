// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Solution 1
// function chunk(array, size) {
  // const chunked = []
  // for(let element of array){
  //   const last = chunked[chunked.length-1]
  //   if(!last || last.length === size){
  //     // adding a new subarray chunk and putting that element inside of it  
  //     chunked.push([element])
  //   } else {
  //     last.push(element)
  //   }
  // }
  // return chunked
// }

// Solution 2
// function chunk(array, size) {
//   const chunked = []
//   let index = 0
//   while(index < array.length){
//     chunked.push(array.slice(index, index + size))
//     index += size
//   }
//   return chunked
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

module.exports = chunk;
