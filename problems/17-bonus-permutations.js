/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/
function permutations(array) {
  // Base case: If the array has only one element, return it as a list of a single permutation.
  if (array.length === 1) {
    return [array];
  }

  const currentElement = array[0];
  const remainingElements = array.slice(1);
  const remainingPerms = permutations(remainingElements);

  const allPerms = [];

  // Insert the current element at all possible positions in each permutation of the remaining elements.
  for (const perm of remainingPerms) {
    for (let i = 0; i <= perm.length; i++) {
      const newPerm = [...perm.slice(0, i), currentElement, ...perm.slice(i)];
      allPerms.push(newPerm);
    }
  }

  return allPerms;
}








/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
