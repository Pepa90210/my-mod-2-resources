

function selectionSort(arr) {

  // Copy the original array
  // let arrCopy = [...arr];
  let arrCopy = arr.slice();

  // Create an array to store the sorted values
  let sorted = [];

  // While the array is not empty...
  while (arrCopy.length) {
    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    let i = arrCopy.indexOf(Math.min(...arrCopy))

    // Save and remove the value at the min index
    // let temp = arrCopy[i];
    // arrCopy = arrCopy.slice(0, i).concat(arrCopy.slice(i + 1));

    let temp = arrCopy.splice(i, 1)[0];

    // Add the min value to the end of the sorted array
    sorted.push(temp);
  }
  return sorted;
}



function selectionSortInPlace(arr) {

  // Set a pointer at zero dividing the array into sorted and unsorted halves
  let divider = 0;

  // Repeat while the unsorted half is not empty:
  while (divider < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let i = arr.indexOf(Math.min(...arr.slice(divider)));

    // Save the min value
    let temp = arr[i];

    // Shift every unsorted value to the left of the min value to the right by 1
    for (let j = i; j > divider; j--) {
      arr[j] = arr[j - 1];
    }
    // Put the min value at the divider
    arr[divider] = temp;
    // Increment the divider and repeat
    divider++;
  }
  return arr;
}


module.exports = [selectionSort, selectionSortInPlace];
