function binarySearch(arr, key) {
  if (arr.length === 0) return -1;

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] < key) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// const sorted = [3, 4, 55, 104, 2243, 54351, 884332, 12934021];

// console.log(binarySearch(sorted, 4));
