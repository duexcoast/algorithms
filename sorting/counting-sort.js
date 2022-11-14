function countingSort(arr) {
  // sorts array of ints where min val is 0 and max val is k
  const K = Math.max(...arr);
  const count = new Array(K + 1).fill(0);

  for (let elem of arr) {
    count[elem] += 1;
  }
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    while (count[i] > 0) {
      arr[j] = i;
      j++;
      count[i]--;
    }
  }
  console.log(arr);
  return arr;
}

let arr = [2, 5, 6, 6, 6, 8];

countingSort(arr);
