// helper function for selection sort

function prefixMax(A, i) {
  if (i > 0) {
    j = prefixMax(A, i - 1);
    console.log('A[i]:', A[i], 'i:', i);
    if (A[i] < A[j]) {
      return j;
    }
    return i;
  }
}

function selectionSort(A, i = null) {
  // Sort A[:i + 1]
  if (i === null) i = A.length - 1;
  if (i > 0) {
    console.log(i);
    j = prefixMax(A, i);
    [A[i], A[j]] = [A[j], A[i]];
    selectionSort(A, i - 1);
  }
}

const array = [4, 6, 2, 7, 1, 3, 9, 5];

selectionSort(array);
console.log(array);
