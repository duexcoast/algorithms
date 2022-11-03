function merge(left, right) {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0;

  // concat values into the resultArray in sorted order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }

    // there will be one remaining element that we need to concat onto resultArray
    // we don't know if it's in the left or right array
    return resultArray
      .concat(left.slice(leftIndex))
      .concat(right.slice(rightIndex));
  }
}

function mergeSort(A) {
  // if array is single element, then it is sorted
  if (A.length <= 1) {
    return A;
  }

  // find the middle, so we can divide the array in half
  const middle = Math.floor(A.length / 2);

  // divide the array into left and right
  const left = A.slice(0, middle);
  // console.log(left.length);
  const right = A.slice(middle);

  // using recursion, combine the left and right
  return merge(mergeSort(left), mergeSort(right));
}

const unsorted = [5, -2, 6, 33, 17, 88, 42, 18990];

console.log(mergeSort(unsorted));
