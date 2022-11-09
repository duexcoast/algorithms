function searchRange(A, target) {
  let l = 0;
  let r = A.length - 1;
  let bounds = [-1, -1];

  // search for left bound
  while (l < r) {
    let mid = ~~(l + (r - l) / 2);

    if (A[mid] < target) l = mid + 1;
    else r = mid;
  }

  if (A[i] !== target) return bounds;
  else bounds[0] = i;

  // search for the right bound;
  r = A.length - 1;
  while (l < r) {
    let mid = ~~(l + (r - l) / 2 + 1); // mid is biased to the right

    if (A[mid] > target) r = mid - 1;
    else l = mid;
  }
  bounds[1] = r;
  return bounds;
}
