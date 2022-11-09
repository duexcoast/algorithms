// Guarantees search space is at least 3 in each step
// Useful for comparing middle to both left & right neighbors in 
// each step when making narrowing decisions.
// Post processing required.  Loop ends when there is two elements left (< not <=)
// so you need to make a final decision after the loop.

function binarySearchIII (arr, target) {
  if (arr.length === 0) return -1;

  let left = 0;
  let right = arr.length -1;

  while (left + 1 < right) {
    let mid = Math.floor(left + (right - left) / 2)

    if (arr[mid] === target) return mid;

    else if (arr[mid] < target) {
      left = mid;
    } else {
      right = mid;
    }
  }

  // Post-processing
  // End condition: left + 1 = right
  if (arr[left] === target) return left
  if (arr[right] === target) return right
}