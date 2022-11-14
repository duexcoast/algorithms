// utility funciton to get the max value in arr[]
function getMax(arr, n) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

// counting sort from least significant digit
function countingSort(arr, n, exp) {
  let output = new Array(n);

  let counts = new Array(10).fill(0);

  // store the occurences of each digit in the counts arr
  for (let i = 0; i < n; i++) {
    counts[Math.floor(arr[i] / exp) % 10]++;
  }
  console.log(counts);

  // change counts[i] so that it contains the actual position of this digit in output[]
  for (let i = 1; i < 10; i++) {
    counts[i] += counts[i - 1];
  }
  console.log(counts);

  // build the output array
  for (let i = n - 1; i >= 0; i--) {
    output[counts[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
    counts[Math.floor(arr[i] / exp) % 10]--;
  }

  // copy the output array to arr
  for (i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}
// console.log(counts);

// n is arr.length
function radixSort(arr, n) {
  let max = getMax(arr, n);

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSort(arr, n, exp);
  }
  console.log(arr);
}

let arr = [1000, 432, 63, 67, 3251, 54];
radixSort(arr, arr.length);
