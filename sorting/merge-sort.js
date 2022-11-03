function mergeSort(A, a = 0, b = null) {
  // Sort A[a:b]
  if (b === null) b = A.length;
  if (1 < b - a) {
    half = (a + b + 1) / 2;
    mergeSort(A, a, half);
    mergeSort(A, half, b);
    [L, R] = [A.splice(a, half), A];
    merge(L, R, A, L.length, R.length, a, b);
  }
}
