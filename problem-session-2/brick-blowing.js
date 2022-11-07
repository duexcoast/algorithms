function getDamages(A) {
  const damages = [];
  let i = 0;

  while (i < A.length) {
    const temp = A.slice(i);
    let count = 0;
    let house = temp[0];
    for (item of temp) {
      if (item <= house) {
        count++;
      }
    }
    damages.push(count);
    i++;
  }
  return damages;
}

const brickArr = [34, 57, 70, 19, 48, 2, 94, 7, 63, 75];

console.log(getDamages(brickArr));
