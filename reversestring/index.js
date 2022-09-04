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

module.exports = reverse;
console.log;
reverse('apple');
