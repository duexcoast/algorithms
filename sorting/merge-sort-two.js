function mergeSort(A) {
  if (A.length <= 1) return A;

  const mid = Math.floor(A.length / 2);

  const left = A.slice(0, mid);
  const right = A.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let resultArray = [];
  let lIndex = 0;
  let rIndex = 0;

  while (lIndex < left.length && rIndex < right.length) {
    if (left[lIndex] < right[rIndex]) {
      resultArray.push(left[lIndex]);
      lIndex++;
    } else {
      resultArray.push(right[rIndex]);
      rIndex++;
    }
  }
  return resultArray.concat(left.slice(lIndex)).concat(right.slice(rIndex));
}

const unsorted = [44, 63, 26, 1, 677, 34, -443, 44];

console.log(mergeSort(unsorted));
