// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//    pyramid(4)
//      '   #   '
//      '  ###  '
//      ' ##### '
//      '#######'

function pyramid(n) {
  for (let height = 0; height < n; height++) {
    let str = '';
    for (let length = 0; length < max; length++) {
      if (length < n - height - 1) str += ' ';
      if (!(length < n - height - 1) && !(length > n + height - 1)) str += '#';
      if (length > n + height - 1) str += ' ';
    }

    console.log(str);
  }
}
pyramid(4);
module.exports = pyramid;
