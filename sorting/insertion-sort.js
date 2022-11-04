function insertionSort(A) {
  for (let i = 0; i < A.length; i++) {
    let j = i;
    while (j > 0 && A[j] < A[j - 1]) {
      [A[j - 1], A[j]] = [A[j], A[j - 1]];

      j = j - 1;
    }
  }
}

unsorted = [-5, 44, 39, 40, 6, 34, 8, 2, -33];

insertionSort(unsorted);
