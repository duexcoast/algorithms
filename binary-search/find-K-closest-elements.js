var findClosestElements = function (A, k, x) {
  let n = A.length - 1;
  let L = 0;
  let R = n - k;

  while (L < R) {
    mid = ~~(L + (R - L) / 2);

    if (A[mid] === A[mid + k]) {
      if (A[mid] < x) L = mid + 1;
      else R = mid;
    } else if (Math.abs(x - A[mid]) <= Math.abs(x - A[mid + k])) {
      R = mid;
    } else {
      L = mid + 1;
    }
  }
  return A.slice(L, L + k);
};

arr = [1, 2, 4, 4, 5];
let k = 4;
let x = 10;

console.log(findClosestElements(arr, k, x));
