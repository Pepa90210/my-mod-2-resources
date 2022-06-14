function linearSearch (arr, target) {

  // Can you solve this in one line?
  return arr.indexOf(target);

};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let lo = 0;
  let hi = arr.length - 1;

  // While high and low indices do not overlap...
  while (lo <= hi) {
    // Find the midpoint between high and low indices
    let mid = Math.floor((hi + lo)/2);
    // Compare the target value to the midpoint value
    // If the target equals the midpoint...
    if (target === arr[mid]) {
      // Return the midpoint index
      return mid;
      // If the target is higher than the midpoint...
    } else if (target > arr[mid]) {
      // Move the low pointer to midpoint + 1
      lo = mid + 1;
      // If the target is less than the midpoint...
    } else {
      // Move the high pointer to midpoint - 1
      hi = mid - 1;
    }
  }
  // Return -1 if the loop exits with overlapping pointers
  return -1;
}


module.exports = [linearSearch, binarySearch]
