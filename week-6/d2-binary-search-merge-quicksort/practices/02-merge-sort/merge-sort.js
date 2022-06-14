// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  if (arr.length <= 1) return arr;

  // Divide the array in half
  let leftSide = arr.slice(0, (arr.length / 2));
  let rightSide = arr.slice(arr.length / 2);

  // Recursively sort the left half
  // Recursively sort the right half
  leftSide = mergeSort(leftSide);
  rightSide = mergeSort(rightSide);
  // Merge the halves together and return
  return merge(leftSide, rightSide)
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  let merged = [];

  // Point to the first value of each array
  let indexA = 0;
  let indexB = 0;
  // While there are still values in each array...
  while (indexA < arrA.length && indexB < arrB.length) {
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array
    if (arrA[indexA] <= arrB[indexB]) {
      merged.push(arrA[indexA]);
      indexA++;
    } else {
      merged.push(arrB[indexB]);
      indexB++;
    }
  };

  if (indexA === arrA.length && indexB < arrB.length) {
    merged.push(...arrB.slice(indexB));
  } else if (indexA < arrA.length && indexB === arrB.length) {
    merged.push(...arrA.slice(indexA));
  };

  // Return the return array
  return merged;
}

module.exports = [merge, mergeSort];
