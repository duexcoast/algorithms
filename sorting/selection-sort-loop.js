function selectionSort(A) {
  for (let i = A.length - 1; i >= 0; i--) {
    m = i;
    for (let j = 0; j < i; j++) {
      if (A[m] < A[j]) {
        m = j;
      }
      [A[m], A[i]] = [A[i], A[m]];
    }
  }
}

unsorted = [-5, 44, 39, 40, 6, 34, 8, 2, -33];

selectionSort(unsorted);
console.log(unsorted);
