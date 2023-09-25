/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

function subsets(arr) {
  // Base case: if the input array is empty, return an array containing an empty array
  if (arr.length === 0) {
    return [[]];
  }

  // Get the first element of the array
  const firstElement = arr[0];

  // Recursively find subsets of the remaining elements
  const subsetsOfRest = subsets(arr.slice(1));

  // Create a new array to store the subsets, including those with and without the first element
  const result = [];

  // For each subset of the remaining elements, create two subsets:
  // 1. A subset that does not include the first element
  // 2. A subset that includes the first element
  for (const subset of subsetsOfRest) {
    result.push(subset); // Subset without the first element
    result.push([firstElement, ...subset]); // Subset with the first element
  }

  return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
