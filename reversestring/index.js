// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const strArr = str.split('');
  const newArr = [];
  for (i = strArr.length - 1; i >= 0; i--) {
    newArr.push(strArr[i]);
  }
  return newArr.join('');
}

function reverseTwo(str) {
  return str.split('').reverse().join('');
}

function reverseThree(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

function reverseFour(str) {
  debugger;
  return str
    .split('')
    .reduce((reversed, character) => character + reversed, '');
}
reverseFour('abcdefg');
module.exports = reverse;
