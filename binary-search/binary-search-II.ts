// This ensures that the search size will always be 2;
// Allowing you to make comparisons on mid and it's right neighbor;
// Useful when you need to make that comparison to decide whether
// to go left or right when narrowing.

// Post processing is required, the loop ends when there is one element left,
// but we need to ensure that that element meets the condition.
function binarySearchII(arr: number[], target: number): number {
  if (arr.length === 0) return -1;

  let left: number = 0;
  let right: number = arr.length;

  while (left < right) {
    let mid: number = left + (right - left) / 2;

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  // Post processing:
  // End condition: left === right
  if (left !== arr.length && arr[left] === target) return left;
  return -1;
}
